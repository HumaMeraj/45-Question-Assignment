// cerate an array
let userNames =["Mahad","Ali","Zeeshan","Admin","Usman"];

// Using ForEach loop on Array
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
     console.log(`Hello ${oneuser},would you like to see a status report?`)   
    }else{
     console.log(`Hello ${oneuser},thank you for logging in again.`)   
    }
})
