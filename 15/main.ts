// Q15- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then use your list to
//  print a message to each person, inviting them to dinner?

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name
//  of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list



let guestList =["Zara", "Maham", "Minal"];

let dontCome = guestList[0];

console.log(dontCome,"nai ahh skta");

guestList.splice(0,1, "Mehak");

guestList.forEach(newguest => console.log(`Salam ${newguest}, Would you like to dinner with mw?`));
