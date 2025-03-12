const setup = () => {

    function replaceDeWithHet(text) {
        text = text + " ";
        let wordArray = [];
        let word = '';
        for (let i = 0; i < text.length; i++) {
            if(text[i] === " "){
                wordArray.push(word);
                word = "";
            }
            else {
                word += text[i];
            }
        }

        for (let j = 0; j < wordArray.length; j++) {
            if (wordArray[j] === "de")
            {
                wordArray[j] = "het";
            }
            if (wordArray[j] === "De")
            {
                wordArray[j] = "Het";
            }
        }

        let result = ""
        for (let i = 0; i < wordArray.length; i++) {
            result += wordArray[i] + ' ';
        }
        result.trim();
        console.log(result);
    }

    const sentence = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    replaceDeWithHet(sentence);

}
window.addEventListener("load", setup);