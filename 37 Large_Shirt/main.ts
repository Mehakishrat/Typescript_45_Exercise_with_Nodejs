// Q37- Large Shirts: Modify the make_shirt() function so that shirts are large
//  by default with a message that reads I love TypeScript. Make a large shirt 
// and a medium shirt with the default message, and a shirt of any size with 
//  a different message?




// Making a Function
function make_shirt(Siza:string = "Large", Message:string = "I love typescript"){
    console.log(`You selected ${Siza} size with ${Message} printed on shirt`)
}
// Calling a function by default Values
make_shirt();

// Calling a function now with medium size and default mssage
make_shirt("Medium");

// Calling a function now with small size and also print different message
make_shirt("Small","I love Javascript");