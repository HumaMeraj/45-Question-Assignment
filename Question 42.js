// making Array
var magicians = ["Alice", "John", "Sam"];
function make_great(magiciansArray) {
    for (var i = 0; i < magiciansArray.length; i++) {
        magicians[i] = "The Great " + magiciansArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
make_great(magicians);
show_magicians(magicians);
