const setup = () => {
    kipEnei()
    document.addEventListener("change", kipEnei)
}
window.addEventListener("load", setup);

const kipEnei = () =>{
    let keuzes = document.getElementById("Kip").options;
    let note = document.getElementById("note");
    let img = document.getElementById("img");
    let letterTxt = document.getElementById("textLetter");
    let letter = document.getElementById("letter").value;

    let tekstMetEi = "Hierboven, een kip met een ei";
    let tekstZonderEi = "Hierboven, een kip zonder ei";

    const arrayMetEi = tekstMetEi.split("");
    const arrayZonderEi = tekstZonderEi.split("");

    let aantal = 0;
    if(keuzes.selectedIndex === 1){
        img.className = "with-egg";
        note.textContent = "Hierboven, een kip met een ei";
        for(let i = 0; i < arrayMetEi.length; i++){
            if(letter === arrayMetEi[i]){
                aantal++;
            }
        }
        if(letter !== "") {
            letterTxt.textContent = "De letter \'" + letter + "\' komt " + aantal + " keer voor."
        }else{
            letterTxt.textContent = "";
        }

    }else if(keuzes.selectedIndex === 2){
        img.className = "img";
        note.textContent = "Hierboven, een kip zonder ei"
        for(let i = 0; i < arrayZonderEi.length; i++){
            if(letter === arrayZonderEi[i]){
                aantal++;
            }
        }
        if(letter !== "") {
            letterTxt.textContent = "De letter \'" + letter + "\' komt " + aantal + " keer voor."
        }else{
            letterTxt.textContent = "";
        }
    }else{

        img.className = "hidden";
        note.textContent = "";
        letterTxt.textContent = "";
    }
}