import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.css'],
})
export class TakeUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent: Observable<Event> = new Observable<Event>();
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const element = document.getElementById('takeUntil');
    if(element != null) {
      this.buttonEvent = fromEvent(
        element!,
        'click'
      );
    }
  }

  startTimer() {
    const observer = {
      next: (data: number) => console.log(data),
      error: (error: Error) => console.log('Observer got an error: ' + error),
      complete: () => console.log('Observer got a complete notification')
    }
    interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe(observer);
  }
}
