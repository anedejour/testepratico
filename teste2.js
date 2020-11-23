const replaceChar = (string, times) => {

    let newString = "";
    let letterToReplace = "";
    let invalid = true;

    for (let index = 0; index < string.length; index++) {
        if (string.charAt(index) !== "?") {
            invalid = false;
            break;
        }
    }

    if (invalid === true) {
        return new Error("Digite um número acima de 0");
    }

    for (let index = 0; index < string.length; index++) {
        if (string.charAt(index) === "?") {
            for (let indexLetter = 0; indexLetter < string.length - 1; indexLetter++) {
                letterToReplace = index - indexLetter < 0 ? index - indexLetter + string.length : index - indexLetter;
                if (string.charAt(letterToReplace) !== "?") {
                    for (let newIndex = 0; newIndex < times; newIndex++) {
                        newString = newString + string.charAt(letterToReplace);
                    }
                    break;
                }
            }
        }
        else {
            newString = newString + string.charAt(index);
        }
    }
    return newString;
}
export default replaceChar;

console.log(replaceChar("x?yzza?y?", 0));
console.log(replaceChar("x?yzza?y?", 1));
console.log(replaceChar("x?yzza?y?", 2));
console.log(replaceChar("x?yzza?y?", 1));