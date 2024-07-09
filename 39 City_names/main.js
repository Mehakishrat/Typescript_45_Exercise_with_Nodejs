// Creating a function with parametters which return a value in string
function city_country(City, county) {
    return "".concat(City, ",").concat(county);
}
// calling a function and print the return value
console.log(city_country("karachi", "pakistan"));
console.log(city_country("New york", "America"));
console.log(city_country("Melbourne", "Australia"));
