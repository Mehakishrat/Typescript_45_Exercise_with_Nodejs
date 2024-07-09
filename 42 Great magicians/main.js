"use strict";
// Define the function to show magicians name
function show_Magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
;
// function to make magicians great through .map() and it will modify array 
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
;
// Define an array of magicians names
let magicians_name = ["harry porter", "Hamza", "usman"];
// call make_great function to modify magicians name 
let great_magicians = make_great(magicians_name);
// call the magicians name functions
show_Magicians(great_magicians);
