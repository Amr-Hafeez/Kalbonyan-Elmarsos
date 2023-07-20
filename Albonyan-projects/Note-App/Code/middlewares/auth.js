import jwt from "jsonwebtoken";
import {UnauthenticatedError} from "../errors/index.js";

const authenticateUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        throw new UnauthenticatedError("Authentication Invalid");
    }
    
    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.userId = payload.id;
        next();
    } catch (err) {
        throw new UnauthenticatedError('Authentication Invalid');
    }
}

export default authenticateUser;