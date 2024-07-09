// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//  using a different number of arguments each time.



// Define a function with a rest parameter that accept items arguments representing our Burger 
function makeBurger(...item:string[]){
    console.log("\nMaking a Burger with the following item:\n")

    item.forEach(singleItem => console.log(singleItem))

    console.log("\nNow enjoy Burger.\n")
};

// call the function 3 times with 3 different number arguments

makeBurger("Beef patty", "Tomato sauce", "Onion", "Lettuce");

makeBurger("Grilled Chiken","mayo");

makeBurger("zinger","sauce","Lettuce","chesse","mayo")

