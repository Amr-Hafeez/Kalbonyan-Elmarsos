import Note from "../models/Note.js";
import {BadRequestError, NotFoundError, UnauthenticatedError} from "../errors/index.js";
import {StatusCodes} from "http-status-codes";

export const getAllNote = async (req, res) => {
    let notes = await Note
            .find({createdBy: req.userId})
            .sort({state: 1, createdAt: 'asc'})
            // .sort('-state')
    
    // console.log(notes);
    const notCompleted = await Note
        .countDocuments({state: false, createdBy: req.userId});
    res.status(StatusCodes.OK).json({
        notes,
        notCompleted
    });
};

export const addNote = async (req, res) => {
    const {content, state} = req.body;
    if (!content) {
        throw new BadRequestError('Please provide a content');
    }
    
    await Note.create({
        content,
        state,
        createdBy: req.userId
    });
    await getAllNote(req,res);
}

export const updateNote =  async (req, res) => {
    const {state} = req.body;
    const {id} = req.params;
    const note = await Note.findOne({_id: id});
    
    if (!note) {
        throw new NotFoundError(`Nothing there with this id: ${id}`);
    }
    if (req.userId !== note.createdBy.toString()) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }
    
    note.state = state;
    await note.save();
    
    await getAllNote(req,res);
}

export const deleteNote = async (req, res) => {
    const {id} = req.params;
    
    const note = await Note.findOne({_id: id});
    if (!note) {
        throw new NotFoundError(`Nothing there with this id: ${id}`);
    }
    
    if (req.userId !== note.createdBy.toString()) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }
    
    await Note.deleteOne({_id: id});
    
    await getAllNote(req,res);
}

export const clearCompleted = async (req, res) => {
    await Note.deleteMany({createdBy: req.userId, state: true});
    await getAllNote(req,res);
}