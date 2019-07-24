// ==== Challenge 1: Write your own closure ====

// Write a simple closure of your own creation.  Keep it simple!
console.log("\n\n-----CHALLENGE 1-----\n\n");

const byTwo = function(number) {
  let num = number;
  function multiply(num) {
    return num * 2;
  }
  return multiply(num);
};

console.log(byTwo(2));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
console.log("\n\n-----STRETCH-----\n\n****\n\n****\n\n****\n\n");

// ==== Challenge 2: Create a counter function ====

console.log("\n\n-----CHALLENGE 2-----\n\n");
const counter = () => {
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

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

console.log("\n\n-----CHALLENGE 3-----\n\n");
const counterFactory = {
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
