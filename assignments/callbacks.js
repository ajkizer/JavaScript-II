// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

console.log("\n\n-----CHALLENGE 1-----\n\n");

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(array) {
  console.log(array);
});

console.log("\n\n-----CHALLENGE 2-----\n\n");

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(arr) {
  console.log(arr);
});

console.log("\n\n-----CHALLENGE 3-----\n\n");

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback
  cb(x + y);
}

sumNums(3, 4, cb => {
  console.log(cb);
});

console.log("\n\n-----CHALLENGE 4-----\n\n");

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(3, 4, cb => console.log(cb));

console.log("\n\n-----CHALLENGE 5-----\n\n");

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}

contains("Gum", items, cb => console.log(cb));

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let noDuplicates = [];
//   array.forEach(item => array.indexOf)
// }
