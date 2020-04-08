import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/models/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  @Input() store: Store;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateToManagement() {
    this.router.navigate(['store/management/' + this.store.id]);
  }

}
