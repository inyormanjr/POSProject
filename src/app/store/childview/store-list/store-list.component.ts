import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StoreFormModalComponent } from 'src/app/components/store/store-form-modal/store-form-modal.component';
import { StoreService } from 'src/app/services/store.service';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  stores$: Observable<Store[]>;
  dialogConfig = new MatDialogConfig();
  constructor(private activatedRoute: ActivatedRoute,
              private dialog: MatDialog, private storeService: StoreService,
              private alertify: AlertifyService) {
             this.dialogConfig.width = '30%';
             this.dialogConfig.panelClass = 'myapp-no-padding-dialog';
             this.dialogConfig.autoFocus = true;
             this.dialogConfig.disableClose = true;
               }

  ngOnInit(): void {
    this.refreshStoreList();
  }

  showNewStoreDialog() {
    this.dialog.open(StoreFormModalComponent, this.dialogConfig);
  }

  refreshStoreList() {
    this.stores$  =  this.storeService.getStoresByOwner();
    this.alertify.message('Fetch Successful');
  }

}
