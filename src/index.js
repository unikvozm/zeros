module.exports = function zeros(expression) {
  let zeros = 0,
    two = 0,
    five = 0;
  let arr = expression.split("*");
  for (let i = 0; i < arr.length; i++) {
    if (/!!/.test(arr[i])) {
      let num = parseInt(arr[i]);
      if (num % 2 === 0) {
        // (2n)!!
        let pow = 1;
        while (num / Math.pow(2, pow) >= 1) {
          // how many even numbers inside
          two += Math.floor(num / Math.pow(2, pow));
          pow++;
        }
        pow = 1;
        while (num / Math.pow(10, pow) >= 1) {
          // how many zeros inside
          zeros += Math.floor(num / Math.pow(10, pow));
          pow++;
        }
        pow = 1;
        while (num / Math.pow(50, pow) >= 1) {
          // how many zeros inside
          zeros += Math.ceil(Math.floor(num / Math.pow(50, pow)) / 2);
          pow++;
        }
      } else {
        // (2n+1)!!
        let pow = 1;
        while (num / Math.pow(5, pow) >= 1) {
          // how many 5s inside
          five += Math.ceil(Math.floor(num / Math.pow(5, pow)) / 2);
          pow++;
        }
      }
    } else {
      // n!
      let num = parseInt(arr[i]);
      let pow = 1;
      while (num / Math.pow(2, pow) >= 1) {
        // how many even numbers inside
        two += Math.floor(num / Math.pow(2, pow));
        pow++;
      }
      pow = 1;
      while (num / Math.pow(5, pow) >= 1) {
        // how many zeros (5*2) inside
        zeros += Math.floor(num / Math.pow(5, pow));
        pow++;
        two -= Math.floor(num / Math.pow(5, pow));
      }
    }
  }
  return zeros + Math.min(five, two);
};
