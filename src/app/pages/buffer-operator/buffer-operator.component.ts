import {AfterViewInit, Component, OnInit} from '@angular/core';
import {buffer, fromEvent, interval, Observable} from 'rxjs';
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css'],
})
export class BufferOperatorComponent implements OnInit,AfterViewInit {
  intervalData: number[] = [];
  showData$: Observable<Event> = new Observable<Event>();
  constructor() {}

  ngAfterViewInit(){
    let element = document.getElementById("showButton");
    if(element !== null){
      this.showData$ = fromEvent(element!,"click");
    }

  }
  ngOnInit(): void {}
  startInterval(){
    interval(1000).pipe(
      tap((data) =>{
        console.log(data)
      })
      ,buffer(this.showData$)).subscribe((data: number[]) => {
      this.intervalData = [...this.intervalData,...data];
    })
  }

}
