import { Component, OnInit } from '@angular/core';
import {bufferToggle, interval, take} from 'rxjs';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-buffer-toggle-operator',
  templateUrl: './buffer-toggle-operator.component.html',
  styleUrls: ['./buffer-toggle-operator.component.css'],
})
export class BufferToggleOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const opening = interval(400).pipe(tap(() => console.log('Opened')));
    const closing  = () => interval(300).pipe(tap(() => console.log('Closed')));
   interval(100)
     .pipe(
       tap((data) => console.log(data)),
       bufferToggle(opening, closing),
       take(5))
     .subscribe(data => console.log(data));
  }
}
