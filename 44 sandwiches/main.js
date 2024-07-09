"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function with a rest parameter that accept items arguments representing our Burger 
function makeBurger(...item) {
    console.log("\nMaking a Burger with the following item:\n");
    item.forEach(singleItem => console.log(singleItem));
    console.log("\nNow enjoy Burger.\n");
}
;
// call the function 3 times with 3 different number arguments
makeBurger("Beef patty", "Tomato sauce", "Onion", "Lettuce");
makeBurger("Grilled Chiken", "mayo");
makeBurger("zinger", "sauce", "Lettuce", "chesse", "mayo");
