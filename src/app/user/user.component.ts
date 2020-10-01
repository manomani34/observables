import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  userId;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.userId = params['id'];
      }
    )
  }

  onActivated(){
    this.userService.userActivated.next(this.userId)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
