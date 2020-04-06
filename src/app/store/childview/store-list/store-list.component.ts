import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StoreFormModalComponent } from 'src/app/components/store/store-form-modal/store-form-modal.component';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores: Store[];
  dialogConfig = new MatDialogConfig();
  constructor(private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) {
             this.dialogConfig.width = '30%';
             this.dialogConfig.panelClass = 'myapp-no-padding-dialog';
             this.dialogConfig.autoFocus = true;
             this.dialogConfig.disableClose = true;
               }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log(data.stores);
      this.stores = data.stores;
    });
  }

  showNewStoreDialog() {
    this.dialog.open(StoreFormModalComponent, this.dialogConfig);
  }

}
