const StatusCodes  =require('http-status-codes')

class NotfoundError extends Error {
    constructor(message) {
        super(message),
        this.name = 'NotfoundError'
        this.status = StatusCodes.NOT_FOUND;
    }
}
class BadReqError extends Error {
    constructor(message) {
        super(message),
        this.name = 'BadReqError'
        this.status = StatusCodes.BAD_REQUEST;
    }
}
class ForbiddenError extends Error {
    constructor(message) {
        super(message),
        this.name = 'ForbiddenError'
        this.status = StatusCodes.FORBIDDEN;
    }

}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message),
        this.name = 'UnauthorizedError'
        this.status = StatusCodes.UNAUTHORIZED;
    }
} 


module.exports= { UnauthorizedError, NotfoundError, ForbiddenError, BadReqError }