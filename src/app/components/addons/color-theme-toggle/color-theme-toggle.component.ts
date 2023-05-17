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

  active = false;

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

  onClick() {
    this.colorThemeService.switchTheme();
    this.setCurrentState();
  }

  private setDarkState() {
    this.active = true;
    this.setImage(darkImgSrc);
  }

  private setLightState() {
    this.active = false;
    this.setImage(lightImgSrc);
  }

  private setCurrentState() {
    switch (this.colorThemeService.getTheme()) {
      case Theme.LIGHT: {
        this.active = false;
        this.setLightState();
        break;
      }
      case Theme.DARK: {
        this.active = true;
        this.setDarkState();
        break;
      }
    }
  }

}
