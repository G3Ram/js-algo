// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.store = [];
  }

  add(item) {
    this.store.unshift(item);
  }

  remove(item) {
    return this.store.pop();
  }
}

// let que = new Queue();
// que.add("1");
// que.add("2");
// que.add("3");
// que.add("4");
// que.remove();
// que.add("5");
// que.add("6");
// que.remove();
// console.log(que.store);

module.exports = Queue;
