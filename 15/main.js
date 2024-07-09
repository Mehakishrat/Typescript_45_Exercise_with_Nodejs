var guestList = ["Zara", "Maham", "Minal"];
var dontCome = guestList[0];
console.log(dontCome, "nai ahh skta");
guestList.splice(0, 1, "Mehak");
guestList.forEach(function (newguest) { return console.log("Salam ".concat(newguest, ", Would you like to dinner with mw?")); });
