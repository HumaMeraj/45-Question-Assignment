// Array of current users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Omer"];
//Array of New users
var new_users = ["Hamza", "Sara", "Ali", "Ahad", "Areeba"];
//Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    // Making a condiion for username already exists and save in our_condition variable 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if - else statments 
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user name ".concat(new_one_user, " is available"));
    }
});
