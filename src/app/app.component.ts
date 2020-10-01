import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';
// test
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
 
  title = 'observable-pro';
  user1Activated = false;
  user2Activated = false;
  subscription: Subscription;

  constructor(private userService: UserService){}
 
  ngOnInit(): void {
    this.subscription = this.userService.userActivated.subscribe(
      (data) =>{
        if(data == 1){
          this.user1Activated = true;
        }
        if(data == 2){
          this.user2Activated = true;
        }
      }              
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
