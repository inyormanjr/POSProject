import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store-form-modal',
  templateUrl: './store-form-modal.component.html',
  styleUrls: ['./store-form-modal.component.css']
})
export class StoreFormModalComponent implements OnInit {

  store: Store;
  formGroup: FormGroup;
  constructor(private dialogRef: MatDialogRef<StoreFormModalComponent>,
              private fB: FormBuilder, private storeService: StoreService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.fB.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      tin: ['', Validators.required],
    }
    );
  }

  onSubmit() {
    this.store = this.formGroup.value;
    this.store.owner = 'Testing';
    this.storeService.saveNewStore(this.store).subscribe(result => {
      console.log(result);
      this.alertify.message('Successfully saved');
      this.dialogRef.close();
    }, error => {
      this.alertify.error(error);
    });
  }
  cancel() {
    this.dialogRef.close();
  }

}
