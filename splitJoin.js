const lyrics = "Amar sonar bangla, Ami tomay valobasi.";
const parts = lyrics.split(" ");
// console.log(parts);

const partial = lyrics.slice(5, 10);
console.log(partial);

const partial2 = lyrics.substring(5, 10);
console.log(partial2);

const lines = ["Amar name AbcD", "Amar bari XyZ", "Ami ki ki khai na Boloto Brothers?"];

const newLine = lines.join(", \n");
console.log(newLine);
