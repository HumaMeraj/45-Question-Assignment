// Array of current users
let current_users =["Usman","ali","Areeba","Zain","Omer"]

//Array of New users
let new_users =["Hamza","Sara","Ali","Ahad","Areeba"]

//Loop through new_users to check for usernames availability

new_users.forEach(new_one_user => {
// Making a condiion for username already exists and save in our_condition variable 
   let our_condition = current_users.some(current_one_user =>current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    
  // print different messages using if - else statments 
   if(our_condition){
console.log(`Sorry ${new_one_user} is already taken!`)
   } else{
    console.log(`This user name ${new_one_user} is available`)
   }
});