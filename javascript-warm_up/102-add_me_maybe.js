#!/usr/bin/node
// Function that increments
exports.addMeMaybe = function (number, theFunction) {
    theFunction(++number);
  };
  