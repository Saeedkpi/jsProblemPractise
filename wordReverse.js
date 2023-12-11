function reversedWords(str) {
    const words = str.split(" ");
    const result = [];
    for(let i = words.length-1; i >= 0; i--) {
        const element = words[i];
        result.push(element)
    }
    const reversed = result.join(" ");
    return reversed;
    // console.log(reversed);
    // console.log(result);
    // console.log(words);
}



const myString = 'I am a good boy'
const reversedString = reversedWords(myString);
console.log('The reversed string is :', reversedString);