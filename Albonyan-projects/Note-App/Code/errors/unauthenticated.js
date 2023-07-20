import {StatusCodes} from "http-status-codes";

export class UnauthenticatedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}