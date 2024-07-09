// Q18- Seeing the World: Think of at least five places in the world you’d like to visit?
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
//   order has changed.


// Making a Array of Country and Print its Orignal order
let countriesToVisit:string[] = ["Canada", "Dubai", "Belgium", "Australia"];
console.log("Orginal order:", countriesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show the array is still in its orignal now 
console.log("Still in orignal ordre:",countriesToVisit);

// print the array in reverse order without modifying the actual list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show the array is still in its orignal now 
console.log("Still in orignal order:",countriesToVisit);

// We have changed the orignal array order now
console.log("Orginal array reversed:", countriesToVisit.reverse());

// Print the array to show that its back to its orignal order
console.log("Back to orignal order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical order
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// We have changed again the orignal array now in reversed order
console.log("Orignal array reversed:", countriesToVisit.reverse());