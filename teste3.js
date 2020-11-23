const lettersSum = (string1, string2) => {

    let stringVector1 = string1.split("");
    let stringVector2 = string2.split("");
    let greaterLetterS1 = 0;
    let greaterLetterS2 = 0;
    let smallerLetterS1 = 0;
    let smallerLetterS2 = 0;
    let greaterLetterS1Value = 0;
    let greaterLetterS2Value = 0;
    let smallerLetterS1Value = 0;
    let smallerLetterS2Value = 0;

    if (!string1.match("[a-zA-Z]") || (!string2.match("[a-zA-Z]"))) {
        return new Error("Texto Inválido");
    }

    stringVector1.sort();
    stringVector2.sort();

    greaterLetterS1 = stringVector1[(stringVector1.length - 1)];
    greaterLetterS1Value = parseInt(greaterLetterS1, 36) - 9;
    smallerLetterS1 = stringVector1[0];
    smallerLetterS1Value = parseInt(smallerLetterS1, 36) - 9;
    greaterLetterS2 = stringVector2[(stringVector2.length - 1)];
    greaterLetterS2Value = parseInt(greaterLetterS2, 36) - 9;
    smallerLetterS2 = stringVector2[0];
    smallerLetterS2Value = parseInt(smallerLetterS2, 36) - 9;

    let result = (greaterLetterS1Value * smallerLetterS2Value) + (greaterLetterS2Value * smallerLetterS1Value);
    return result;
}
export default lettersSum;

console.log(lettersSum("dacb", "gdab"));
console.log(lettersSum("dcb", "gdab"));
