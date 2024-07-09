// Q31- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty?
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


// Creating array
let userName = ["Mehak","Ayesha","Admin","Minal"]

if (userName.length === 0){
    console.log("Your array is empty we need to find some users");
}
else{
    userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser} Would you like to see a status report?`);
    }else{
    console.log(`hello ${oneUser} thank you for longing in again`)
    }
    })
};
