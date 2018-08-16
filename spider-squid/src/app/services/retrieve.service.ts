import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class RetrieveService {
  apiURL = environment.apiURL;

  constructor(public http: Http) { }

  retrieve(postId: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.apiURL + '?postId=' + postId, {headers: headers})
      .map(res => res.json());
  }
}
