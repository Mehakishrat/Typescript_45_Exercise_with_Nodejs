// Array of current Users
var current_users = ["Mehak", "Ali", "Minal", "Maham", "Ayesha"];
// array of new_users
var new_users = ["Areeba", "Hania", "mehak", "zara", "Ali"];
// Loop through the new_users to check for username availability
new_users.forEach(function (one_new_User) {
    // Print difference message using if and else condition   
    if (current_users.some(function (one_current_User) { return one_current_User.toLowerCase() === one_new_User.toLocaleLowerCase(); })) {
        console.log("".concat(one_new_User, " will need to enter a new username"));
    }
    else {
        console.log("username ".concat(one_new_User, " is available"));
    }
});
