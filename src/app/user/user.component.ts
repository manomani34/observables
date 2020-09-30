import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  userId;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.userId = params['id'];
      }
    )
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
