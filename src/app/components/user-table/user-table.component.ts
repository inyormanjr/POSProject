import { Component, OnInit, Input } from '@angular/core';
import { MockData, User } from 'src/app/models/user';
import { trigger, style, state, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserTableComponent implements OnInit {
  @Input() users: User[];
  dataSource: any;
  columnsToDisplay = ['name', 'address', 'contact'];
  expandedElement: User | null;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.users;
  }

}
