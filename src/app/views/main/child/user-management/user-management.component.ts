import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UserModalComponent } from 'src/app/components/modals/user-modal/user-modal.component';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserManagementComponent implements OnInit {
  dataSource = this.userService.mockData;
  columnsToDisplay = ['name', 'address', 'contact'];
  expandedElement: User | null;

  constructor(private userService: UserService,
              public dialog: MatDialog, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  showCreateDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.data = {};
    const dialogRef =  this.dialog.open(UserModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.alertify.message(result);
    }, error => {
      this.alertify.error(error);
    });
  }

}
