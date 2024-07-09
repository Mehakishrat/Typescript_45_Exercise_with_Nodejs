// 41.Magicians: Make a array of magician’s names. Pass the array to a function
//   called show_magicians(), which prints the name of each magician in the array.



// Define a function to print each magicians name form an array
function Show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
};

// Define an araay containing Magicians name
let Magicians_name:string[] = ["Harry protter","Ali","usman"]

// call the function to print each magicians name 
Show_magicians(Magicians_name)