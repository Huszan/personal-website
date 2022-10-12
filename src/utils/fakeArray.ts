
export class FakeArray {

  static ofNumber(val: number, start = 0) {
    let arr = [];
    for(let i = start; i < val; i++) {
      arr.push(i);
    }
    return arr;
  }

}
