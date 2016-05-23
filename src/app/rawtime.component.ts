import { Component } from '@angular/core';
import { ProjectService } from './services/project.service'
import { TimeInputComponent } from './time-input/time-input.component'

@Component({
  moduleId: module.id,
  selector: 'rawtime-app',
  templateUrl: 'rawtime.component.html',
  styleUrls: ['rawtime.component.css'],
  directives: [TimeInputComponent]
})
export class RawtimeAppComponent {
  title = 'rawtime works!';
  projects: any;
  dayStart: number;
  dayPositionRange: number[];

  constructor(private projectService: ProjectService) {

  }

  moveDayIndex(delta: number) {
    this.dayStart += delta;
    this._setDayPositionRange();
  }

  _setDayPositionRange() {
    this.dayPositionRange = [];
    for (var index = 0; index < 10; index++) {
      this.dayPositionRange.push(index + this.dayStart);
    }
    console.log(this.dayPositionRange);
  }

  ngOnInit() {
    this.dayStart = 0;
    this._setDayPositionRange();
    this.projectService.getProjects().then(response => {
      this.projects = response;
    });
  }
}
