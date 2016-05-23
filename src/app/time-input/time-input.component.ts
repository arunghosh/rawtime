import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'time-input',
  templateUrl: 'time-input.component.html',
  styleUrls: ['time-input.component.css']
})
export class TimeInputComponent implements OnInit {

  @Input() dayIndex: number;
  @Input() projectId: number;

  constructor() {}

  ngOnInit() {
  }

}
