const lyrics = "Amar sonar bangla, Ami tomay valobasi.";

const searchString = "valobasi";

// const doesExist = lyrics.includes("sonar");

// const doesExist = lyrics.includes("Sonar");
// const doesExist = lyrics.includes(searchString);
// const lyricsUpperCase = lyrics.toUpperCase();
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);

// ----------------------------------

// indexOf

console.log(lyrics.indexOf("sonar"));

if(lyrics.indexOf("tomay") !== -1) {
    console.log("Exists inside the string");
}
else {
    console.log("Cannot find it");
}

//startsWith

console.log(lyrics.startsWith("amar"));

// endsWith
const fileName = "mybiodata.pdf";
const otherFile = "mypic.png";

console.log(fileName.endsWith(".pdf"));

