// name array
let guestArray: string [] = ["Fatima","Suman","Hareem"];

//cannot make dinner
let cannotAttend:string ="Hareem";
console.log(`${cannotAttend} cannot make it for dinner`);

//invite new guest
let newGuest:string ="Halima";
guestArray[guestArray.indexOf(cannotAttend)]=newGuest;
console.log(guestArray);

// send message
guestArray.map((items) => console.log(`Hello,${items} you are invited to dinner`));