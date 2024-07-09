// Q32- Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username?
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
//   are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print
//   a message that the person will need to enter a new username. If a username has not been used, print 
//   a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



// Array of current Users
let current_users = ["Mehak","Ali","Minal","Maham","Ayesha"];

// array of new_users
let new_users = ["Areeba","Hania","mehak","zara","Ali"];

// Loop through the new_users to check for username availability
new_users.forEach(one_new_User => {
   
// Print difference message using if and else condition   
    if(current_users.some(one_current_User => one_current_User.toLowerCase() === one_new_User.toLocaleLowerCase())){
    console.log(`${one_new_User} will need to enter a new username`)
    }else{
        console.log(`username ${one_new_User} is available`)
    }
});