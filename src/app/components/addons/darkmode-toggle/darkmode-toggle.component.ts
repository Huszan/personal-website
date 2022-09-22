import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.css']
})
export class DarkmodeToggleComponent implements OnInit {

  slider: HTMLElement | undefined | null;

  constructor() {
  }

  onClick() {
    this.changeState();
  }
  private setDarkState() {
    let w = this.slider!.parentElement!.clientWidth - this.slider!.clientWidth;
    this.slider!.style.transform = `translateX(28px)`;
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
  private setLightState() {
    this.slider!.style.transform = `translateX(0px)`;
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  }
  private setCurrentState() {
    if(!this.slider) return;
    if(this.isDark()) {
      this.setDarkState();
    }
    else {
      this.setLightState();
    }
  }
  private changeState() {
    if(!this.slider) return;
    if(this.isDark()) {
      this.setLightState();
    }
    else {
      this.setDarkState();
    }
  }
  private setPreferredScheme() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches)
      localStorage.setItem('color-theme', 'dark');
    else
      localStorage.setItem('color-theme', 'light');
  }
  isDark() {
    return localStorage.getItem('color-theme') == 'dark';
  }
  private isStored() {
    return 'color-theme' in localStorage;
  }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    if(!this.isStored()) {
      this.setPreferredScheme();
    }
    this.setCurrentState();
  }

}
