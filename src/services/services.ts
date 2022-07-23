import { Storage } from 'services/storage/storage.service';
import { Http } from 'services/http/http.service';
import { Auth } from 'services/auth/auth.service';
import { ENV } from 'common/constants/constants';
import { Trips } from './trips/trips.service';

const storage = new Storage({
    storage: localStorage,
});

const http = new Http({
    storage,
});

const auth = new Auth({
    apiPath: ENV.BASE_URL!,
    http,
});

const trips = new Trips({
    apiPath: ENV.BASE_URL!,
    http,
});

export { http, storage, auth, trips };
