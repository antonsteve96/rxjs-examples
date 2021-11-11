import { AfterViewInit, Component, OnInit } from '@angular/core';
import {fromEvent, interval, Observable} from 'rxjs';
import {skipUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html',
  styleUrls: ['./skip-until-operator.component.css'],
})
export class SkipUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent: Observable<Event> = new Observable<Event>();
  numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const element = document.getElementById('showuntilbutton');
    if(element !== null) {
      this.buttonEvent = fromEvent(
        element!,
        'click')
    }

    interval(500)
      .pipe(
        tap((data: number) => console.log(data)),
        skipUntil(this.buttonEvent))
      .subscribe((data: number) => {
        this.numbers = [...this.numbers,data];
      })

  }
}
