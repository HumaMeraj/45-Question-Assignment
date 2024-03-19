// Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Type Script"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
//calling a Function with by-default values
make_shirt();
// calling a Function now with medium size and default message
make_shirt("Medium");
// calling a Function now with small size and also different print message
make_shirt("Small", "I love javaScript");
