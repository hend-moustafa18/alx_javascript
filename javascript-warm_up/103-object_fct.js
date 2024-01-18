#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  // Add the incr function using a method declaration
  myObject.incr = function () {
    this.value++; // Increment the value property using 'this'
  };
  
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);