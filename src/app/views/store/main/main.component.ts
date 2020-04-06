import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showLoadingScreen = false;
  constructor(private router: Router, private activatedRute: ActivatedRoute,
              ) {
                this.router.events.subscribe((routerEvent: Event) => {
                  if (routerEvent instanceof NavigationStart) {
                    this.showLoadingScreen = true;
                  }
                  if (routerEvent instanceof NavigationEnd) {
                    this.showLoadingScreen = false;
                  }
                });
              }
  ngOnInit(): void {
  }

  navigateToDashboard() {
    this.router.navigate(['store/dashboard']);
  }

  navigateToStoreProfile() {
    this.router.navigate(['store/storeprofile']);
  }

  navigateToStoreList() {
    this.router.navigate(['store/list']);
  }

  navigateToBranchById(id: number) {
    this.router.navigate(['store/branch', id]);
  }

}
