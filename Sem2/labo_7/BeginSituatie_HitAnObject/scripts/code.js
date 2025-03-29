let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 2000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
 let image = document.getElementById("target");
 let start = document.getElementById("start");
image.addEventListener("click",ClickImage);
start.addEventListener("click",Start);





};

const Start = () => {
setInterval(ClickImage, global.MOVE_DELAY)

}

const ClickImage = (event) => {
    let image = document.getElementById("target");
    console.log(image.width, image.height);
    const xPos = Math.random() * (600 - image.width);
    const yPos = Math.random() * (800 - image.height);
    image.style.left = xPos + "px";
    image.style.top = yPos + "px";


    image.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX);
}

window.addEventListener("load", setup);


