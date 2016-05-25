import { Component, OnInit, Input } from '@angular/core';
import { Control } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { MdInput } from '@angular2-material/input'
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'time-input',
  templateUrl: 'time-input.component.html',
  styleUrls: ['time-input.component.css'],
  directives: [MdInput]
})
export class TimeInputComponent implements OnInit {

  @Input() dayIndex: number;
  @Input() projectId: number;

  time = new Control();

  constructor(private projectSrv: ProjectService) {}

  ngOnInit() {
    this._getCurrent();
  }
  
  // Get current effort for the day 
  _getCurrent(){
    this.projectSrv
      .getTime(this.projectId, this.dayIndex)
      .subscribe(res => {
        this.time.updateValue(Number(res.time));
        this._onChangeUpdate();
      });
  }
  
  _onChangeUpdate(){
    this.time.valueChanges.debounceTime(500).subscribe(time => {
      this.projectSrv
        .updateTime(this.projectId, this.dayIndex, time)
        .subscribe(res => console.log(res))
    });
  }

}
