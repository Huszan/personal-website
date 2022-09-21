
export class FakeArray {

  static ofNumber(val: number) {
    let arr = [];
    for(let i = 0; i < val; i++) {
      arr.push(i);
    }
    return arr;
  }

}
