import { Auth } from 'services/auth/auth.service';
import { Http } from 'services/http/http.service';
import { Storage } from 'services/storage/storage.service';

export interface IServices {
    http: Http;
    storage: Storage;
    auth: Auth;
}
