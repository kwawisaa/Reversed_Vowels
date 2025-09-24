const userInput = "flower is beautiful";
let newWord = userInput.split("");
let vowels = [];
let vowelIndex = 0;

for (let i=newWord.length-1; i>=0; i--) {
    if (/[aeiou]/i.test(newWord[i])) {
        vowels.push(newWord[i]);
    }
}

for (let i = 0; i < newWord.length; i++) {
    if (/[aeiou]/i.test(newWord[i])) {
        newWord[i] = vowels[vowelIndex];
        vowelIndex++;
    }
}

console.log("OUTPUT:\n"+newWord.join(""));
