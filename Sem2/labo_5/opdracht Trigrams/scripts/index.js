const setup = () => {

    function generateTrigrams(word) {
        let trigrams = [];
        for (let i = 0; i < word.length - 2; i++) {
            trigrams.push(word.substring(i, i + 3));
        }
        return trigrams;
    }

    const word = "onoorbaar";
    const trigrams = generateTrigrams(word);

    trigrams.forEach(trigram => console.log(trigram));


}
window.addEventListener("load", setup);