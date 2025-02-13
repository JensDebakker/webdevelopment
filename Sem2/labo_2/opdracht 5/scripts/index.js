const setup = () => {
    let buttonElement=document.getElementById("button");
    buttonElement.addEventListener("click", clicked);
}

const clicked = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);



