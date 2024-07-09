var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Country and Print its Orignal order
var countriesToVisit = ["Canada", "Dubai", "Belgium", "Australia"];
console.log("Orginal order:", countriesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show the array is still in its orignal now 
console.log("Still in orignal ordre:", countriesToVisit);
// print the array in reverse order without modifying the actual list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show the array is still in its orignal now 
console.log("Still in orignal order:", countriesToVisit);
// We have changed the orignal array order now
console.log("Orginal array reversed:", countriesToVisit.reverse());
// Print the array to show that its back to its orignal order
console.log("Back to orignal order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in Alphabetical order
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
// We have changed again the orignal array now in reversed order
console.log("Orignal array reversed:", countriesToVisit.reverse());
