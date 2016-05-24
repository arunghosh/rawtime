import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {URLSearchParams, Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

  constructor(private http: Http, private jsonp: Jsonp) {}
  
  getProjects(){
    // return Promise.resolve([{
    //   name: 'NDash',
    //   id: 1
    // }, {
    //   name: 'Zine Screen',
    //   id: 10, 
    // }])
    return this.http
      .get('http://localhost:8000/api/projects/')
      .toPromise()
      .then(response => response.json());
  } 
}
