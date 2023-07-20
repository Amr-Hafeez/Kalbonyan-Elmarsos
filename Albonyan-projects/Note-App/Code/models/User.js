import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 6
    },
    phone: {
        type: String
    },
    birthYear: {
        type: String
    }
});

UserSchema.pre('save', async function() {
    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        {id: this._id},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_LIFETIME}
    )
}

UserSchema.methods.comparePassword = async  function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

export default mongoose.model('User', UserSchema);