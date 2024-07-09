"use strict";
// Creating a function 
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
// Calling 3 functions and crreating 3 variable with different values
let album1 = make_album("Mehak", "Album Title 1");
let album2 = make_album("Minal", "Album Title 2");
// Calling a make_album functions with third parameters
let album3 = make_album("Ali", "Album Title 3 ", 20);
//  print the variables
console.log(album1);
console.log(album2);
console.log(album3);
