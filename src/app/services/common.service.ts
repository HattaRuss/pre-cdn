import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class CommonService {

    constructor(private http: Http) { }

    deleteUser(id) {
        return this.http.delete('http://localhost:8080/api/user/delete/' + id)
            .pipe(map((response: Response) => response.json()));
    }

    addUser(user) {
        return this.http.post('http://localhost:8080/api/user/adduser', user)
            .pipe(map((response: Response) => response.json()));
    }

    updateUser(user: any, id: any) {
        return this.http.put('http://localhost:8080/api/user/update/' + id, user)
            .pipe(map((response: Response) => response.json()));
    }

    getUserid(id: any) {
        return this.http.get('http://localhost:8080/api/user/list-by/' + id)
        .pipe(map((response: Response) => response.json()));
    }

    getAllUsers() {
        return this.http.get('http://localhost:8080/api/user/list-all')
        .pipe(map((response: Response) => response.json()));
    }
}
