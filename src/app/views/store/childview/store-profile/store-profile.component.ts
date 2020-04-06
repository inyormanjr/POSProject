import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  storeProfileForm: FormGroup;
  editMode = false;
  constructor(private formBuilder: FormBuilder, private storeService: StoreService) {
    this.initializeForm();
   }

   toggleEditMode() {
     this.editMode = !this.editMode;
   }

  initializeForm() {
    this.storeProfileForm =  this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      shortName: ['', [Validators.required]],
     address: ['', [Validators.required, Validators.minLength(5)]],
     postalCode: ['', [Validators.required]],
      tin: ['', [Validators.required]],
      contact: ['', [Validators.required]]
     });
  }

  ngOnInit(): void {
  }

}
