var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making Array
var magician = ["Alice", "John", "Sam"];
// New modified Array
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great" + magicianArray[i];
    }
}
function show_magician(magician) {
    magician.forEach(function (magician) {
        return console.log(magician);
    });
}
;
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
// show original names
console.log('\n\nThis is my original Array:');
show_magician(magician);
// show modified names
console.log('\n\nThis is my modified copy of the Array:');
show_magician(copyMagicianArray);
