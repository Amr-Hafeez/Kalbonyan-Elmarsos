import mongoose from "mongoose";

const NoteScheme = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Please Provide a Content!']
    },
    state: {
        type: Boolean,
        required: false,
        default: false
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user']
    }
}, {timestamps: true});

export default mongoose.model('Note', NoteScheme);