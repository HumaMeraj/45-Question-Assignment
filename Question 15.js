"use strict";
// name array
let guestArray = ["Fatima", "Suman", "Hareem"];
//cannot make dinner
let cannotAttend = "Hareem";
console.log(`${cannotAttend} cannot make it for dinner`);
//invite new guest
let newGuest = "Halima";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log(guestArray);
// send message
guestArray.map((items) => console.log(`Hello,${items} you are invited to dinner`));
