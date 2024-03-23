// Making a Function
function describe_city(city:string, Country:string=`Default Country.`){
    console.log(`${city} is in ${Country}`);
}
describe_city(`Karachi`,`Pakistan`);
describe_city(`Tokyo`,`Japan`);
describe_city(`Paris`);