/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.store = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.store.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.store.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.store[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let minVal = this.store[0];
  this.store.forEach((item) => {
    if (minVal > item) {
      minVal = item;
    }
  });
  return minVal;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
