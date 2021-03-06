var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var arrays = []

function addElementToBeginningOfArray(array, element) {
  arrays = [element, ...array];
  return arrays;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return arrays;
}

function addElementToEndOfArray(array, element) {
  arrays = [...array, element];
  return arrays;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return arrays;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1);
}
