// manual error for user if he didn't enter long enough password
export const errorHandler = ( statusCode, message ) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}