// making Array
let magicians:string []=["Alice","John","Sam"];

function make_great (magiciansArray:string[]){
    for( let i=0; i< magiciansArray.length; i++){
        magicians[i]="The Great "+ magiciansArray[i]
    }
}
function show_magicians(magicians:string[]){
    magicians.forEach(magicians =>{
        console.log(magicians);
    })

    }
    make_great(magicians);
    show_magicians(magicians);



