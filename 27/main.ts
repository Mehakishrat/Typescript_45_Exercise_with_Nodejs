// Q27- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed.
//  for the appropriate color alien.


// Define Variable
let alienColor = "Green";

// Using If and Else_if statements
if(alienColor === "Green"){
    console.log("(Version 1)You shot down Green alien you have earned 5 points");
}
else if(alienColor === "Yellow"){
    console.log("You shot down Yellow alien you have earned 10 points");
}
else if(alienColor === "Red"){
    console.log("You shot down Red alien you have earned 15 points");
} 

// Version 2

let alienColor02 = "Yellow";

if(alienColor02 === "Green"){
    console.log("You shot down Green alien you have earned 5 points");
}
else if(alienColor02 ==="Yellow"){
    console.log("(version 2)You shot down Yellow alien you have earned 10 points");
}
else if(alienColor02 === "Red"){
    console.log("You shot down Red alien you have earned 15 points");
};

// Version 3

let alienColor03 = "Red";

if(alienColor03 === "Green"){
    console.log("You shot down Green alien you have earned 5 points");
}
else if(alienColor03 === "Yellow"){
    console.log("You shot down Yellow alien you have earned 10 points");
}
else if(alienColor03 === "Red"){
    console.log("(Version 3)You shot down Red alien you have earned 15 points");
};