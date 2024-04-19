// Question 121
for (let num = 1; num < 11; num++) {
    if (num === 5) {
        continue;
    }
    console.log(num);
}
// Question 122
let num = 10;
while (num >= 1) {
    if (num === 5) {
        break;
    }
    console.log(num);
    num--;
}
// Question 123
let sentence = "sdfghidsouas";
for (const character of sentence) {
    if (character.toLowerCase() === "a" || character.toLowerCase() === "e" || character.toLowerCase() === "i" || character.toLowerCase() === "o" || character.toLowerCase() === "u") {
        console.log("First vowel is found ", character);
        break;
    }
    console.log(character);
}
export {};
