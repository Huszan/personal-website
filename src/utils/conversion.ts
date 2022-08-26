
export class Convert {

  static msToYr(value: number) {
    return Math.floor(value / 31556952000);
  }
  static yrToMs(value: number) {
    return value * 31556952000;
  }

}
