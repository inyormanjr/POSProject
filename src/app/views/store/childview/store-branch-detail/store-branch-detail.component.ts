import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-branch-detail',
  templateUrl: './store-branch-detail.component.html',
  styleUrls: ['./store-branch-detail.component.css']
})
export class StoreBranchDetailComponent implements OnInit {
  branchId: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.branchId = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }

}
