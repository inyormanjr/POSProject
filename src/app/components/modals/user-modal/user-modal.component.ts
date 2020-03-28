import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {

  constructor(public dialogRef: MatDialogRef<UserModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
