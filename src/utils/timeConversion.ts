
export class TimeConvert {

  private static readonly minute = 1000 * 60;
  private static readonly hour = this.minute * 60;
  private static readonly day = this.hour * 24;
  private static readonly year = this.day * 365;

  static msToMinute(value: number) {
    return Math.floor(value / this.year);
  }
  static msToHour(value: number) {
    return Math.floor(value / this.year);
  }
  static msToDay(value: number) {
    return Math.floor(value / this.year);
  }
  static msToYear(value: number) {
    return Math.floor(value / this.year);
  }


}
