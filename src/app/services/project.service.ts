import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {URLSearchParams, Jsonp} from '@angular/http';

const URL = 'http://localhost:8000/';

@Injectable()
export class ProjectService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  getProjects() {
    return this.http
      .get(URL + 'api/projects/')
      .map(response => response.json());
  }

  getTime(projectId: number, dateIndex: number) {
    return this.http
      .get(URL + `api/project-time/${projectId}/${dateIndex}/`  )
      .map(response => response.json());
  }

  updateTime(projectId: number, dateIndex: number, time: number) {
    var data = JSON.stringify({
      date: dateIndex,
      time: time,
      project: projectId
    });
    return this.http
      .post(URL + 'api/project-time/', data)
      .map(response => response.json());
  }
  
}
