// Q19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner?


let guestList = ["Zara", "Maham", "Minal", "Mehak"];

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));

let lenghtGuest:number = guestList.length;

console.log("We are inviting total", lenghtGuest, "Guest");
