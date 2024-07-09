var guestList = ["Zara", "Maham", "Minal"];
var dontCome = guestList[0];
console.log(dontCome, "nai aah skte hai");
guestList.splice(0, 1, "Mehak");
console.log("Good News!, we have found a bigger table for Dinner");
guestList.unshift("Usman");
guestList.push("Ali");
var middleIndexnumber = Math.floor(guestList.length / 2);
guestList.splice(middleIndexnumber, 0, "Ayesha");
console.log("Updated List of our guest");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me")); });
console.log("Unfortunatily, the new dinner table wont arrive on the time, so i can only invite two guest for dinner with me");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " i cant invite you to dinner"));
}
console.log("Invitation to the Last two guest");
guestList.forEach(function (LastTwo) { return console.log("Luckly ".concat(LastTwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empity List:", guestList);
