// Q17- Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner,and you have space for only two guests?
//• Start with your program from Exercise 16. Add a new line that prints a message saying 
//  that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//  Each time you pop a name from your list, print a message to that person letting them know you’re 
//  sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//   actually have an empty list at the end of your program.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//   have an empty list at the end of your program.


// creating a Guest list Array
let guestList = ["Zara","Maham", "Minal"];

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
let middleIndexnumber =Math.floor(guestList.length/2);

// Adding a new Guest of middle index of array
guestList.splice(middleIndexnumber,0, "Ayesha");

// Print the message of updated list
console.log("Updated List of our guest");

// Sending the invitation message of our guest one by one with their names
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me`));

// Inform only two guest can invite to dinner
console.log("Unfortunatily, the new dinner table wont arrive on the time, so i can only invite two guest for dinner with me");

// Using while_loop to removing guest from the array until the only two names remain
while(guestList.length > 2){
     let removedGuest = guestList.pop()   
     console.log(`Sorry, ${removedGuest} i cant invite you to dinner`);
}

// Print the message for Invitation Two guest
console.log("Invitation to the Last two guest");

// Sending the invitation to the last two guest from list
guestList.forEach(LastTwo => console.log(`Luckly ${LastTwo}, you are still invited to dinner`));

// Removing Last two guest from list
guestList.pop();
guestList.pop();

// Print the message of Empty list
console.log("Empity List:", guestList);