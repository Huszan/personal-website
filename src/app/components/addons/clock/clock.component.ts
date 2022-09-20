import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {style} from "@angular/animations";
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  tick12 = 360/12;
  tick60 = 360/60;
  digits = [1,2,3,4,5,6,7,8,9,10,11,12];
  hourRotation = 0;
  minuteRotation = 0;
  secondRotation = 0;
  subscription!: Subscription;

  constructor() {
  }

  startClock() {
    this.subscription = timer(0, 1000).subscribe((res) => {
      let d = new Date();
      this.hourRotation = d.getHours() * this.tick12;
      this.minuteRotation = d.getMinutes() * this.tick60;
      this.secondRotation = d.getSeconds() * this.tick60;
    })
  }
  stopClock() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.startClock();
  }
  ngOnDestroy(): void {
    this.stopClock();
  }

}
