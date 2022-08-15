import { ApiPath, ContentType, HttpMethod } from 'common/enums/enums';
import { IQuery, IResponse } from 'models/api.model';
import { Http } from 'services/http/http.service';

class Bookings {
    private apiPath;
    private http;

    constructor({ apiPath, http }: { apiPath: string; http: Http }) {
        this.apiPath = apiPath;
        this.http = http;
    }

    getAllBookings(): Promise<IResponse | IResponse[]> {
        return this.http.load(`${this.apiPath}${ApiPath.BOOKINGS}`, { method: HttpMethod.GET });
    }

    postBooking(payload: IQuery): Promise<IResponse | IResponse[]> {
        return this.http.load(`${this.apiPath}${ApiPath.BOOKINGS}`, {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            payload: JSON.stringify(payload),
        });
    }

    deleteBooking(id: string): void {
        this.http.load(`${this.apiPath}${ApiPath.BOOKINGS}/${id}`, {
            method: HttpMethod.DELETE,
        });
    }
}

export { Bookings };
