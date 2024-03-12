"use strict";
// name array
let guestArray = ["Fatima", "Suman", "Hareem"];
//cannot make dinner
let cannotAttend = "Hareem";
//invite new guest
let newGuest = "Halima";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log("Welcome all we found the bigger dinner table!");
guestArray.unshift("Noreen");
let middleguest = "Aqsa";
let middleindex = guestArray.length / 2;
guestArray.splice(middleindex, 0, middleguest);
guestArray.push("Suman");
guestArray.map((item) => console.log(`\nDear ${item} You are invited to dinner!`));
