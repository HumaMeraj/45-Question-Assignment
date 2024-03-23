// Making Array
let magician:string []=["Alice","John","Sam"];
// New modified Array
function copyArray(arr: string[]){
    return [...arr]
}
function make_great (magicianArray:string[] ){

    for(let i=0;i< magicianArray.length;i++){

        magicianArray[i]= "The Great"   +   magicianArray[i]
    }
}
function show_magician(magician:string[]){
    magician.forEach (magician =>
      console.log(magician)
        )};

    const copyMagicianArray  =copyArray(magician)  

    make_great(copyMagicianArray);
// show original names
    console.log('\n\nThis is my original Array:');

    show_magician(magician);
// show modified names
    console.log('\n\nThis is my modified copy of the Array:');
    show_magician(copyMagicianArray);


    

