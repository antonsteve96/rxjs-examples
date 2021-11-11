import { Component, OnInit } from '@angular/core';
import {bufferTime, interval} from "rxjs";

@Component({
  selector: 'app-buffer-time-operator',
  templateUrl: './buffer-time-operator.component.html',
  styleUrls: ['./buffer-time-operator.component.css'],
})
export class BufferTimeOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(100)
      .pipe(bufferTime(200,300))
      .subscribe(data => console.log(data));
  }
}
