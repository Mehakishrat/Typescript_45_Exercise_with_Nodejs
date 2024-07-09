
// 45- Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional 
// feature. Print the Object that’s returned to make sure all the information was stored correctly?




// Function definition with parameter and return types
function create_car(manufacturer:string, model:string, ...optional:string[]) {
     // Define the car object with a specific type
    let car:{[key:string]: string} = {
        manufacturer: manufacturer,
        model: model,
    }

    // Iterate over optional parameters to add additional properties to the car object
    optional.forEach(Option =>{
        let [key, value] = Option.split(":")
        car [key]  = value
    } )

 // Return the constructed car object
    return car
};

// Create a car object using the function
let my_car = (create_car("Toyota", "Land cruiser", "Color:White","Feature:sunroof","year:2018"));

// Log the car object to the console
console.log(my_car);
