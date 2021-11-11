import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.css'],
})
export class TakeLastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(500)
      .pipe(take(20),takeLast(10))
      .subscribe(data => console.log(data))
  }
}
