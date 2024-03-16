var userNames = ["Mahad", "Ali", "Ali", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array in Empty we need to find some users!");
}
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ",thank you for logging in again."));
    }
});
