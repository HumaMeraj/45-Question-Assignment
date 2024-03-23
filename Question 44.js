// making a Function
function makesandwich(items) {
    console.log('\nMaking a Sandwich with :');
    items.forEach(function (element) { return console.log("- " + element); });
    console.log('Enjoy your Sandwich ! \n');
}
makesandwich(['Ham', 'Cheese', 'Lettuce']);
makesandwich(['Turkey', 'Bacon',]);
makesandwich(['Peanut butter', 'Jelly',]);
