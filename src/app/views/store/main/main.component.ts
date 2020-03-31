import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard() {
    this.router.navigate(['store/dashboard']);
  }

  navigateToStoreProfile() {
    this.router.navigate(['store/storeprofile']);
  }

  navigateToBranchById(id: number) {
    this.router.navigate(['store/branch', id]);
  }

}
