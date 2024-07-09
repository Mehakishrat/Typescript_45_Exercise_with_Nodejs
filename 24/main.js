// Define Variable
var apple = "Apple";
var ten = 10;
var twentey = 20;
var fruitArray = ["Mango", "Strawberry", "ornage"];
// Tests for equality and inequality with strings
console.log("Is Apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to Apple?");
console.log(apple != "apple");
// Tests using lowercase function
console.log("\nIs Apple is equal to apple after changing lowercase function?");
console.log(apple.toLowerCase() == "Apple");
console.log("\nIs apple is equal to apple after changing lower case functions?");
console.log(apple.toLowerCase() == "apple");
// Numerical tests
// Equal to
console.log("\nIs twenty is not equal to 10?");
console.log(twentey != 10);
// Not equal to
console.log("\nIs ten is equal to 20?");
console.log(ten == 20);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 5?");
console.log(twentey < 5);
// Greater than or equal to
console.log("\nIs ten is equal to or greater than zero?");
console.log(ten >= 0);
// Less than or equal to
console.log("\nIs twenty less than or equal to ten?");
console.log(twentey <= ten);
// Tests using "and" and "or" operators
// Using && (and)
console.log("\nIs ten is not equal to twenty and ten is less than twenty?");
console.log(ten != twentey && ten < twentey);
// Using || (Or)
console.log("\nIs ten is not equal to twenty and ten is greater than twenty?");
console.log(ten != twentey && ten > twentey);
// Test whether an item is include in a array
console.log("\nIs Mango include in my fruit array?");
console.log(fruitArray.includes("Mango"));
// Test not include 
console.log("\nIs mango is nort include in my fruit array?");
console.log(!fruitArray.includes("Mango"));
