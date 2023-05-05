import { Injectable } from '@angular/core';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
const localStorageThemeName = "color-theme";

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  private setupSavedTheme() {
    let theme = this.getTheme();
    if(theme == Theme.DARK)
      document.documentElement.classList.add(Theme.DARK);
    else
      document.documentElement.classList.remove(Theme.DARK);
  }
  private setTheme(theme: Theme) {
    localStorage.setItem(localStorageThemeName, theme);
    this.setupSavedTheme();
  }
  getTheme() {
    return localStorage.getItem(localStorageThemeName);
  }
  switchTheme() {
    let currentTheme = this.getTheme()!;
    if(currentTheme.match(Theme.DARK))
      this.setTheme(Theme.LIGHT);
    else
      this.setTheme(Theme.DARK);
  }
  private setupPreferredTheme() {
    if(window.matchMedia(`(prefers-color-scheme: ${Theme.DARK})`).matches)
      this.setTheme(Theme.DARK);
    else
      this.setTheme(Theme.LIGHT);
  }
  private isThemeSet() {
    return !!this.getTheme();
  }

  constructor() {
    if(!this.isThemeSet()) this.setupPreferredTheme();
    else this.setupSavedTheme();
  }
}
