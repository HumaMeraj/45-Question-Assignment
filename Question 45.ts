function  carinfo (manufacturer:string ,model:string,...options:[string,any][]): object{
    let car ={manufacturer,model};
    options.forEach(([key,value])=> car[key] = value);
    return car;
}
console.log(carinfo("Toyota","Corolla",["color","Black"],["Year","2020"]));
console.log(carinfo("Ford","Fiesta",["color","Blue"],["Sunroof",true]));
