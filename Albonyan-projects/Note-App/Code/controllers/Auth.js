import User from "../models/User.js";
import {BadRequestError, UnauthenticatedError} from "../errors/index.js";
import attackCookie from "../utils/attackCookie.js";
import {StatusCodes} from "http-status-codes";

export const register = async (req, res) => {
    const {
        username,
        email,
        password,
        phone,
        birthYear
    } = req.body;
    
    if (!username || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }
    
    User.findOne({email})
        .then(user => {
            if (user) {
                throw new BadRequestError('Email is already exists :(');
            }
        });
    
    const user = await User.create({
        username,
        email,
        password,
        phone: phone || " ",
        birthYear: birthYear || " "
    });
    
    const token = user.createJWT();
    attackCookie({res, token});
    
    res.status(StatusCodes.CREATED).json({
        msg: 'User Created Successfully :)',
        user: {
            username: user.username,
            email: user.email,
            phone: user.phone,
            birthYear: user.birthYear
        },
        token
    });
};

export const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    
    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    }
    
    const user = await User.findOne({email});
    if (!user) {
        throw new UnauthenticatedError('Either email or password is invalid');
    }
    
    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) {
        throw new UnauthenticatedError('Invalid Prompts')
    }
    
    const token = user.createJWT();
    
    attackCookie({res, token});
    
    res.status(StatusCodes.OK).json({
        user: {
            email: user.email,
            username: user.username,
            phone: user.phone,
            birthYear: user.birthYear
        }
    });
}

export const updateUser = async (req, res) => {
    const {
        email,
        username,
        password,
        phone,
        birthYear
    } = req.body
    
    if (!email || !username || !password) {
        throw new BadRequestError('Please provide all values');
    }
    
    const user = await User.findOne({_id: req.userId});
    
    user.email = email;
    user.username = username;
    user.password = password;
    user.phone = phone || '';
    user.birthYear = birthYear || '';
    
    await user.save();
    const token = user.createJWT();
    attackCookie({res, token});
    
    res.status(StatusCodes.OK).json({
        user: {
            username,
            email,
            phone,
            birthYear
        }
    });
}

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({_id: req.userId});
    user.password = undefined;
    res.status(StatusCodes.OK).json({user});
}

export const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now())
    });
    res.status(StatusCodes.OK).json({msg: 'User Logged Out!'});
}