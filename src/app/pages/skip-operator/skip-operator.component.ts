import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { skip, take } from 'rxjs/operators';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrls: ['./skip-operator.component.css'],
})
export class SkipOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observer = {
      next: (data: number) => console.log('Observer got a next value: ' + data),
      error: (error: Error) => console.error('Observer got an error: ' + error),
      complete: () => console.log('Observer got a complete notification'),
    };
    of(1,2,3,4,5)
      .pipe(skip(10))
     .subscribe(observer)
  }
}
