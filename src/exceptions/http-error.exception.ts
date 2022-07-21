import { HttpCode, ExceptionName } from 'common/enums/enums';

const DEFAULT_MESSAGE = 'Network Error';

class HttpError extends Error {
    status: number;

    constructor({ status = HttpCode.UNAUTHORIZED, message = DEFAULT_MESSAGE } = {}) {
        super(message);
        this.status = status;
        this.name = ExceptionName.HTTP_ERROR;
    }
}

export { HttpError };
