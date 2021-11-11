import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrls: ['./first-operator.component.css'],
})
export class FirstOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
}
