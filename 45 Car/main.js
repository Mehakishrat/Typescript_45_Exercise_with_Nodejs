"use strict";
// function create_Car(manufacturer, model, ...optional):{
//     let car = {
//         manufacturer: manufacturer,
//         model: model,
//     }
// optional.forEach(option => {
//     let [key, value] = option.split(":");
//     car [key.trim()] = value.trim();
// })
// return(car)
// };
// let my_Car = create_Car("Toyota", "Land cruiser", "Color:White","Feature:sunroof","year:2018");
// console.log(my_Car);
// function create_Car(manufacturer: string, model: string, ...optional: string[]){
//     // Define the car object with a specific type
//     let car: { [key: string]: string } = {
//         manufacturer: manufacturer,
//         model: model,
//     };
//     // Iterate over optional parameters to add additional properties to the car object
//     optional.forEach(option => {
//         let [key, value] = option.split(":");
//         car[key.trim()] = value.trim();
//     });
//     // Return the constructed car object
//     return car;
// }
// // Create a car object using the function
// let my_Car = create_Car("Toyota", "Land Cruiser", "Color:White", "Feature:sunroof", "Year:2018");
// // Log the car object to the console
// console.log(my_Car);
// Q45- Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional 
// feature. Print the Object that’s returned to make sure all the information was stored correctly?
function create_Car(manufacturer, model, ...optional) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    optional.forEach(Option => {
        let [key, value] = Option.split(":");
        car[key] = value;
    });
    return car;
}
;
let my_Car = (create_Car("Toyota", "Land cruiser", "Color:White", "Feature:sunroof", "year:2018"));
console.log(my_Car);
