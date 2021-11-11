import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrls: ['./distinct-until-changed-operator.component.css'],
})
export class DistinctUntilChangedOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /*of(1,2,2,1,2)
      .pipe(distinctUntilChanged())
      .subscribe(data => console.log(data))*/
    /*of(1,2,3,4)
      .pipe(distinctUntilChanged(
        (previous: number, current: number) => {
          console.log('Current'+current, +'Previous'+previous)
          return current === previous + 1;
        })
      )
      .subscribe(data => console.log(data))*/
    const employee = {
        id: 1,
        name: 'Stefano'
      }

      const employees = [
        employee,
        employee,
      {
        id: 2,
        name:'Paolo'
      },
      {
        id: 3,
        name: 'Erminia'
      }
    ]
    from(employees)
      .pipe(distinctUntilChanged((previous,current) => {
        return previous.id === current.id;
        })
      )
      .subscribe(data => console.log(data))
  }
}
