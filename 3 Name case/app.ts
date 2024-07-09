// Q3- Name Cases: Store a person’s name in a variable, and then print
//  that person’s name in lowercase, uppercase, and titlecase?


// Create a variable of personName
let PersonName = 'mehak Ishrat';

// Print the person name in lowercase, uppercase and titlecase
console.log(PersonName.toLowerCase());

console.log(PersonName.toUpperCase());

console.log(PersonName.replace(/\b\w/g, (char) => char.toUpperCase()));