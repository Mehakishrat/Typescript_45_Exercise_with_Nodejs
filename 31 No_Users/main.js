// Creating array
var userName = [];
if (userName.length === 0) {
    console.log("Your array is empty we need to find some users");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, " Would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, " thank you for longing in again"));
        }
    });
}
;
