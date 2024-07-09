// Creating Array
var userName = ["Mehal", "Ayesha", "Admin", "Minal"];
// Using foreach loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, " would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, " thank you for longing in again"));
    }
});
