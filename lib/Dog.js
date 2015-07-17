'use strict';

function Dog(name, age){
  this.name = name;
  this.age = age;
  // assign the name and age properties here
}

Dog.prototype.ageInYears = function() {
  return this.age;
};

Dog.prototype.ageInDays = function() {
  return this.age * 365;
};

Dog.prototype.ageInDogYears = function() {
  return this.age * 7;
};
