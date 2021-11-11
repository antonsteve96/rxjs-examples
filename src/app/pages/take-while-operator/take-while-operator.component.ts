import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrls: ['./take-while-operator.component.css'],
})
export class TakeWhileOperatorComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    const observer = {
    next: (data: number) => console.log('Observer got a next value: ' + data),
    error: (error: Error) => console.error('Observer got an error: ' + error),
    complete: () => console.log('Observer got a complete notification'),
  };
    interval(500)
      .pipe(takeWhile((x: number) => x < 5))
      .subscribe(observer);
  }
}
