import { Injectable } from '@angular/core';

export enum State {
  Idle = 0,
  Loading = 1,
}

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
  get current(): State {
    return this._current;
  }

  private _current = State.Idle;

  constructor() { }

  startLoading() {
    this._current = State.Loading;
  }
  stopLoading() {
    this._current = State.Idle;
  }
  isIdle() {
    return this.current === State.Idle;
  }
  isLoading() {
    return this.current === State.Loading;
  }
}
