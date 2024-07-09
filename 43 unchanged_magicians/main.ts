// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to 
// each magician’s name.




// Define the function to show magicians name
function show_Magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
};

// function to make magicians great through .map() and it will modify array 
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)
};

// Define an array of magicians names
let magicians_name:string[]= ["Ali","Hamza","usman"];

// Making a copy of orignal array through .slice() function
let copy_magicians_name = magicians_name.slice();

// Modify the copied array to include "The Great" with their names
let copied_great_magicians = make_great(copy_magicians_name);

// show both array orignal and copied
// orognal
console.log("Orignal\n");
show_Magicians(magicians_name);

// copied
console.log("\ncopied\n");
show_Magicians(copied_great_magicians);

