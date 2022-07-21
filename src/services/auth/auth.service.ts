import { ApiPath, AuthApiPath, HttpMethod, ContentType } from 'common/enums/enums';
import { Http } from 'services/http/http.service';

class Auth {
    private apiPath;
    private http;

    constructor({ apiPath, http }: { apiPath: string; http: Http }) {
        this.apiPath = apiPath;
        this.http = http;
    }

    login(payload: { [key: string]: string }) {
        return this.http.load(`${this.apiPath}${ApiPath.AUTH}${AuthApiPath.SIGN_IN}`, {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            hasAuth: false,
            payload: JSON.stringify(payload),
        });
    }

    registration(payload: { [key: string]: string }) {
        return this.http.load(`${this.apiPath}${ApiPath.AUTH}${AuthApiPath.SIGN_UP}`, {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            hasAuth: false,
            payload: JSON.stringify(payload),
        });
    }

    getCurrentUser() {
        return this.http.load(`${this.apiPath}${ApiPath.AUTH}${AuthApiPath.AUTHENTICATED_USER}`, {
            method: HttpMethod.GET,
        });
    }
}

export { Auth };
