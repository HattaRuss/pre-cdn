import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {

    constructor(private http: Http) { }

    deleteUser(id: any, url: any) {
        return this.http.delete(url + '/api/user/delete/' + id)
            .pipe(map((response: Response) => response.json()));
    }

    addUser(user: any, url: any) {
        return this.http.post(url + '/api/user/adduser', user)
            .pipe(map((response: Response) => response.json()));
    }

    updateUser(user: any, id: any, url: any) {
        return this.http.put(url + '/api/user/update/' + id, user)
            .pipe(map((response: Response) => response.json()));
    }

    getUserid(id: any, url: any) {
        return this.http.get(url + '/api/user/list-by/' + id)
        .pipe(map((response: Response) => response.json()));
    }

    getAllUsers(url) {
        return this.http.get(url + '/api/user/list-all')
        .pipe(map((response: Response) => response.json()));
    }

    getMyConfigJSON(): Observable<any> {
        return this.http.get('assets/config/myconfig.json');
    }
}
