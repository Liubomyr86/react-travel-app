import { ApiPath, HttpMethod } from 'common/enums/enums';
import { IResponse } from 'models/api.model';
import { Http } from 'services/http/http.service';

class Trips {
    private apiPath;
    private http;

    constructor({ apiPath, http }: { apiPath: string; http: Http }) {
        this.apiPath = apiPath;
        this.http = http;
    }

    getAllTrips(): Promise<IResponse | IResponse[]> {
        return this.http.load(`${this.apiPath}${ApiPath.TRIPS}`, {
            method: HttpMethod.GET,
        });
    }

    getTrip(id: string): Promise<IResponse | IResponse[]> {
        return this.http.load(`${this.apiPath}${ApiPath.TRIPS}/${id}`, {
            method: HttpMethod.GET,
        });
    }
}

export { Trips };
