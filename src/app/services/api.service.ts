import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Location } from '../models/location';

const url = 'https://http://35.190.151.242';
// const url = 'http://localhost';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    public getLocations(): Observable<Location[]> {
        return this.http
            .get(url + ':8080/locations')
            .pipe(map(response => {
                const todos = response.json();
                return todos.map((location) => new Location(location));
            }))
            .pipe(catchError(this.handleError));
    }

//     addLocation(crag: string, lat: number, long: number, name: string, loc: string): Observable<Location> {

//         let obj = { name: crag, lat: lat, long: long, submitter: name, home: loc };
//         let body = 'data=' + JSON.stringify(obj);
//         console.log('body: ' + body);

//         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
//         let options = new RequestOptions({ headers: headers });

//         return this.http.post(this.postUrl, body, options)
//                         .map((res:Response) => console.log('post response: ' + res.json()))
//                         .catch(this.handleError);
//     }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
