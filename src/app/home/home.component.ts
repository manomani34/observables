import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  inter: number = 0;
  myObsvl: string = '';
  countersubscription: Subscription;
  customsubscription: Subscription;
  constructor() { }


  ngOnInit(): void {
    const counter = Observable.interval(1000);
    this.countersubscription = counter.subscribe(
      (n: number) => {
        this.inter = n;
      },
      () => { },
      () => { }
    );

    const customObservable = new Observable(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package!');
        }, 3000);
        setTimeout(() => {
          observer.next('secound package!');
        }, 5000);
        // setTimeout(() => {
        //   observer.error('application has error!');
        // }, 7000);
        setTimeout(() => {
          observer.complete();
        }, 7000);
      });
    this.customsubscription = customObservable.subscribe(
      (data: string) => { this.myObsvl = data},
      (error: string) => { this.myObsvl = error},
      () => { this.myObsvl = 'complete'}
    )

  }

  ngOnDestroy(): void {
    this, this.countersubscription.unsubscribe();
    this, this.customsubscription.unsubscribe();
  }
}
