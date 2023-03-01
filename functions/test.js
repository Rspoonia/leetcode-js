const obj = {
  x: 10,
  getVal: function () {
    return this.x;
  },
};
const temp = obj.getVal;
const obj2 = {
  x: 30,
};
console.log(temp.call(obj2));
