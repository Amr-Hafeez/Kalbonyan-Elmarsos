import {StatusCodes} from "http-status-codes";

export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}