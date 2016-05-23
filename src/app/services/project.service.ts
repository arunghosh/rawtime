import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

  constructor(private http: Http) {}
  
  getProjects(){
    return Promise.resolve([{
      name: 'NDash',
      id: 1
    }, {
      name: 'Zine Screen',
      id: 10, 
    }])
    // return this.http
    //   .get('http://app.rawdatatech.com/api/projects')
    //   .toPromise()
    //   .then(response => response);
  } 
}
