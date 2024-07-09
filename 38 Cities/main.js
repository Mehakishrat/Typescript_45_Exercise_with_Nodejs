"use strict";
// Describe Functions
function describe_city(City, country = "pakistan") {
    console.log(`${City} is in ${country}`);
}
// Calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "UK");
