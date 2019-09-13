// Write a function that's going to make an ajax request
// to retrieve a blob of JSON
// Use the standard "fetch" function

function fetchAlbums2015() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums') //fetch returns a promise
    .then(res => res.json()) //.then() is a callback to use when the promise is resolved.
    // We then need to turn it into json... this process creates another promise that  returns the json.
    .then(json => console.log(json));
}

async function fetchAlbums() {
  // tell the parser there is asynchronous behaviour in this scope
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums'); // await in any statememnt that produces a promise
  const json = await res.json(); //give the resolve response a variable name to use it after.

  console.log(json);
}
//  orr
const fetchAlbums2 = async () => {
  // tell the parser there is asynchronous behaviour in this scope
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums'); // await in any statememnt that produces a promise
  const json = await res.json(); //give the resolve response a variable name to use it after.

  console.log(json);
};

fetchAlbums2();
