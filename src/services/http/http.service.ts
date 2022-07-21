import { HttpHeader, HttpMethod } from 'common/enums/enums';
import { HttpError } from 'exceptions/http-error.exception';
import { IFetchOptions, IQuery, IResponse } from 'models/api.model';
import { Storage } from 'services/storage/storage.service';

class Http {
    private storage;

    constructor({ storage }: { storage: Storage }) {
        this.storage = storage;
    }
    async load(url: string, options: IFetchOptions): Promise<IResponse> {
        const { method = HttpMethod.GET, payload = null, contentType } = options;
        const headers = this.getHeaders(contentType);

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

    private getHeaders(contentType: string | undefined): Headers {
        const headers = new Headers();
        if (contentType) {
            headers.append(HttpHeader.CONTENT_TYPE, contentType);
        }

        return headers;
    }

    // private getUrl(url: string, query: IQuery | undefined): string {
    //     return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
    // }

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

    private async parseJSON(response: Response) {
        return await response.json();
    }

    private throwError(err: unknown): never {
        throw err;
    }
}

export { Http };
