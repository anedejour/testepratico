const removeRepeated = (string, limit) => {

    let newString = "";
    let letterA = 0;
    let letterB = 0;

    if (limit <= 0) {
        return new Error("Digite um número acima de 0");
    }

    if (limit >= string.length) {
        return string;
    }

    newString = string.substring(0, limit);

    for (let index = limit; index < string.length; index++) {
        for (let indexLetter = 1; indexLetter <= limit; indexLetter++) {
            letterA = index;
            letterB = index - indexLetter;
            if (string.charAt(letterA) !== string.charAt(letterB)) {
                newString = newString + string.charAt(letterA);
                break;
            }
        }
    }
    return newString;
}
export default removeRepeated;

console.log(removeRepeated("xxxyzzaaayy", 1));
console.log(removeRepeated("xxxyzzaaayy", 0));
console.log(removeRepeated("xxxyzzaaayy", 2));