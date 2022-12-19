import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ColorThemeService, Theme} from "../../../services/color-theme.service";

const darkImgSrc = "assets/moon.svg";
const lightImgSrc = "assets/brightness-2.svg";

@Component({
  selector: 'app-color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorThemeToggleComponent implements OnInit {

  constructor(
    private colorThemeService: ColorThemeService,
  ) { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.setCurrentState();
  }

  private slider: HTMLElement | undefined | null;

  private getImageElement(parent: HTMLElement) {
    return parent.getElementsByTagName('img')[0];
  }
  setImage(src: string) {
    this.getImageElement(this.slider!).src = src;
  }

  private getLightThemeTransform(offset = 0) {
    return offset;
  }
  private getDarkThemeTransform(offset = 0.2) {
    return this.getSliderWidth() - this.getSliderHandleWidth() + offset;
  }

  onClick() {
    this.colorThemeService.switchTheme();
    this.setCurrentState();
  }

  private getSliderWidth() {
    return this.slider!.parentElement!.clientWidth;
  }
  private getSliderHandleWidth() {
    return this.slider!.clientWidth;
  }

  private setDarkState() {
    this.slider!.style.transform = `translateX(${this.getDarkThemeTransform()}px)`;
    this.setImage(darkImgSrc);
  }
  private setLightState() {
    this.slider!.style.transform = `translateX(${this.getLightThemeTransform()}px)`;
    this.setImage(lightImgSrc);
  }
  private setCurrentState() {
    switch (this.colorThemeService.getTheme()) {
      case Theme.LIGHT: {
        this.setLightState();
        break;
      }
      case Theme.DARK: {
        this.setDarkState();
        break;
      }
    }
  }

}
