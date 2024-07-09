// Q16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
//  to invite to dinner?
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//   that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


// creating a Guest list Array
let guestList = ["Zara", "Maham", "Minal"];

// Making variable for those who cant come 
let dontCome = guestList[0];

// Print the name of Guest Who cant come
console.log(dontCome, "nai aah skte hai");

//Add or Remove Value from guest list Array
guestList.splice(0,1, "Mehak");

// Message print for bigger table 
console.log("Good News!, we have found a bigger table for Dinner");

// Adding a new guest at starting index of array
guestList.unshift("Usman");

// Adding a new guest at Ending index of array
guestList.push("Ali");

// Making a varibale for stooring middle index of our guest list arry
let middleIndex:number =Math.floor(guestList.length/2);

// Adding a new Guest of middle index of array
guestList.splice(middleIndex,0, "Ayesha");

// Print the message of updated list
console.log("Updated List of our guest");

// Sending the invitation message of our guest one by one with their names
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));

