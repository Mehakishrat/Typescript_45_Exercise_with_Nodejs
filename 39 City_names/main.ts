// Q39- City Names: Write a function called city_country() that takes in
//  the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.



// Creating a function with parametters which return a value in string
function city_country(City:string,county:string):string{
    return `${City},${county}`       
}

// calling a function and print the return value
console.log (city_country("karachi","pakistan"));

console.log(city_country("New york","America"));

console.log(city_country("Melbourne","Australia"));

