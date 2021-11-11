import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.css'],
})
export class DistinctUntilKeyChangedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let employees = [
      {
        id: 1,
        name: 'Leela'
      },
      {
        id: 1,
        name: 'Leela web'
      },
      {
        id: 2,
        name: 'Leela'
      },
      {
        id: 3,
        name: 'Leela'
      },
      {
        id: 3,
        name: 'Leela'
      },
      {
        id: 4,
        name: 'Leela web dev'
      }
    ];
    /*from(employees)
      .pipe(distinctUntilKeyChanged('name'))
      .subscribe(data => console.log(data));*/
    from(employees)
      .pipe(distinctUntilKeyChanged('name', (previous, current) => {
        return previous.substr(0,4) === current.substr(0,4);
      }))
      .subscribe((data) => console.log(data))
  }

}
