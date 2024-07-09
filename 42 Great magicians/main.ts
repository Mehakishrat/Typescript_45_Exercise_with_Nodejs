// 42. Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.



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

// call make_great function to modify magicians name 
let great_magicians = make_great(magicians_name)


// call the magicians name functions
show_Magicians(great_magicians);
