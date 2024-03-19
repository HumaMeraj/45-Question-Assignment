// Making a function
function make_shirt (size:string ="Large",printMessage:string="I love Type Script"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
//calling a Function with by-default values
make_shirt();

// calling a Function now with medium size and default message
make_shirt("Medium");

// calling a Function now with small size and also different print message
make_shirt("Small","I love javaScript");