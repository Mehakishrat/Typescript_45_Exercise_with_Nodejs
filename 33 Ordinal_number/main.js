// create a array
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using for Loop
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var Onenumber = Numbers_1[_i];
    var ordinalEnding = void 0;
    if (Onenumber === 1) {
        ordinalEnding = "st";
    }
    else if (Onenumber === 2) {
        ordinalEnding = "nd";
    }
    else if (Onenumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // console.log(`${Onenumber}${ordinalEnding}`)};}
// console.log(`${Onenumber}${ordinalEnding}`)};
