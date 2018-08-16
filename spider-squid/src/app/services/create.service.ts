import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CreateService {
  apiURL = environment.apiURL;
  apiKey = environment.apiKey;

  constructor(public http:Http) { }

  create(text:string, voice:string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', this.apiKey);
    return this.http.post(this.apiURL, JSON.stringify({text:text, voice:voice}), {headers: headers})
      .map(res => res.json());
  }

}
