import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }


    private url = 'https://adwordstapiest.herokuapp.com/';

    private token = 'YnF1eThuaWdua202MGF0emxtaWpoa2Ixbm5ncGE5ejllbnQ2MGtwd2F5Y2NmNnRmbmJ5cjhhbzB4c3YwYjdheDpXZzM0bjlwcWszR3lOOEFoTG5PU3NqaWx5MHlDTHZlRlJ5Z2huWXljUlJVZ2gxI3RveXk4d0VZaE4wRlNxQmpw';

    getCampanhas(customerId): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept':  'application/json',
                'authorization': 'Basic ' + this.token
            })
        };
        return this.http.get(this.url + 'api/v1/campanha?customerId=' + customerId  ,  httpOptions);
    }

    createCampanha(payload, customerId): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept':  'application/json',
                'authorization': 'Basic ' + this.token
            })
        };
        return this.http.post(this.url + 'api/v1/campanha?customerId=' + customerId  , payload,  httpOptions);
    }

    updateCampanha(payload, customerId): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept':  'application/json',
                'authorization': 'Basic ' + this.token
            })
        };
        return this.http.put(this.url + 'api/v1/campanha?customerId=' + customerId  , payload,  httpOptions);
    }

    deleteCampanha(id, customerId): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept':  'application/json',
                'authorization': 'Basic ' + this.token
            })
        };
        return this.http.delete(this.url + 'api/v1/campanha?customerId=' + customerId  + '&idCampanha=' + id,  httpOptions);
    }
}
