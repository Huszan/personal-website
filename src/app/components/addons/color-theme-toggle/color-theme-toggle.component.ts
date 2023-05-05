import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ColorThemeService, Theme} from "../../../services/color-theme/color-theme.service";

const darkImgSrc = "assets/moon.svg";
const lightImgSrc = "assets/brightness-2.svg";

@Component({
  selector: 'app-color-theme-toggle',
  templateUrl: './color-theme-toggle.component.html',
  styleUrls: ['./color-theme-toggle.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorThemeToggleComponent implements AfterViewInit {

  @ViewChild('themeSliderHandle') sliderHandleRef!: ElementRef;

  constructor(
    private colorThemeService: ColorThemeService,
  ) { }

  ngAfterViewInit(): void {
    this.setCurrentState();
  }

  setImage(src: string) {
    let imageRef = this.sliderHandleRef.nativeElement.getElementsByTagName('img')[0];
    imageRef.src = src;
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
    return this.sliderHandleRef.nativeElement.parentElement.clientWidth;
  }

  private getSliderHandleWidth() {
    return this.sliderHandleRef.nativeElement.clientWidth;
  }

  private setDarkState() {
    this.sliderHandleRef.nativeElement.style.transform = `translateX(${this.getDarkThemeTransform()}px)`;
    this.setImage(darkImgSrc);
  }

  private setLightState() {
    this.sliderHandleRef.nativeElement.style.transform = `translateX(${this.getLightThemeTransform()}px)`;
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
