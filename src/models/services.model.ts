import { Auth } from 'services/auth/auth.service';
import { Bookings } from 'services/bookings/bookings.services';
import { Http } from 'services/http/http.service';
import { Storage } from 'services/storage/storage.service';
import { Trips } from 'services/trips/trips.service';

export interface IServices {
    http: Http;
    storage: Storage;
    auth: Auth;
    trips: Trips;
    bookings: Bookings;
}
