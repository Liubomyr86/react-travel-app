import { StorageKey } from 'common/enums/app/app';
import { HttpHeader, HttpMethod } from 'common/enums/enums';
import { HttpError } from 'exceptions/http-error.exception';
import { IFetchOptions, IHeaders, IResponse } from 'models/api.model';
import { Storage } from 'services/storage/storage.service';

class Http {
    private storage;

    constructor({ storage }: { storage: Storage }) {
        this.storage = storage;
    }
    async load(url: string, options: IFetchOptions): Promise<IResponse | IResponse[]> {
        const { method = HttpMethod.GET, payload = null, hasAuth = true, contentType } = options;
        const headers = this.getHeaders({ contentType, hasAuth });

        try {
            const response = await fetch(url, {
                method,
                headers,
                body: payload,
            });
            const data = await this.checkStatus(response);

            return this.parseJSON(data);
        } catch (err) {
            return this.throwError(err);
        }
    }

    private getHeaders({ contentType, hasAuth }: IHeaders): Headers {
        const headers = new Headers();
        if (contentType) {
            headers.append(HttpHeader.CONTENT_TYPE, contentType);
        }

        if (hasAuth) {
            const token = this.storage.getItem(StorageKey.TOKEN);

            headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
        }

        return headers;
    }

    private async checkStatus(response: Response): Promise<Response> {
        if (!response.ok) {
            const parsedException = await response.json().catch(() => ({
                message: response.statusText,
            }));

            throw new HttpError({
                status: response.status,
                message: parsedException?.message,
            });
        }

        return response;
    }

    private async parseJSON(response: Response): Promise<IResponse> {
        return await response.json();
    }

    private throwError(err: unknown): never {
        throw err;
    }
}

export { Http };
