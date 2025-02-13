const setup = () => {
    const familyArray = ['Bob','Bab','Bib','Bub','Beb']
    console.log(familyArray.length);


    const VoegNaamToe = (Name) => {
        familyArray.push(Name);
        console.log(familyArray[familyArray.length-1]);
    }

    VoegNaamToe(window.prompt("Wat is uw naam", "onbekend"));
}



window.addEventListener("load", setup);