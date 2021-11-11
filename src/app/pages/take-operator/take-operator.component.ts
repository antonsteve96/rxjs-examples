import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css'],
})
export class TakeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observer = {
      next: (data: number) => console.log(data),
      error: (error: Error) => console.error('Observer got an error: ' + error),
      complete: () => console.log('Observer got a complete notification'),
    };
    interval(500)
     .pipe(take(20)).
    subscribe(observer)
  }
}
