// Making a Function
function describe_city(city, Country) {
    if (Country === void 0) { Country = "Default Country."; }
    console.log("".concat(city, " is in ").concat(Country));
}
describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("Paris");
