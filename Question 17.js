"use strict";
// name array
let guestArray = ["Fatima", "Suman", "Hareem"];
//cannot make dinner
let cannotAttend = "Hareem";
//invite new guest
let newGuest = "Halima";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
guestArray.unshift("Noreen");
let middleguest = "Aqsa";
let middleindex = guestArray.length / 2;
guestArray.splice(middleindex, 0, middleguest);
guestArray.push("Misbah");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nSorry ${removeguest}we can't invite you to dinner!`);
}
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
