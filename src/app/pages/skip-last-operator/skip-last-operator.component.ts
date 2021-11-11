import { Component, OnInit } from '@angular/core';
import {interval, take} from 'rxjs';
import {skipLast, tap} from 'rxjs/operators';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html',
  styleUrls: ['./skip-last-operator.component.css'],
})
export class SkipLastOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   interval(500)
     .pipe(
       tap((data) => console.log(data)),
       skipLast(5))
     .subscribe(data => console.log(data))
  }
}
