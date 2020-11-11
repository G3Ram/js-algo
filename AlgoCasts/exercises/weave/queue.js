// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    console.log("Am i here??", this.data);
    return this.data.pop();
  }

  peek() {
    const lastIndex = this.data.length - 1;
    return this.data[lastIndex];
  }
}

module.exports = Queue;
