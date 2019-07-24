// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const byTwo = function(number) {
  let num = number;
  function multiply(num) {
    return num * 2;
  }
  return multiply(num);
};

console.log(byTwo(2));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  count: 0,
  increment: function() {
    this.count += 1;
    return this.count;
  },
  decrement: function() {
    this.count -= 1;
    return this.count;
  }
};

console.log(counterFactory.increment());
console.log(counterFactory.decrement());
console.log(counterFactory.increment());
console.log(counterFactory.increment());
console.log(counterFactory.increment());
