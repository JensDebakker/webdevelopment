const setup = () => {
    let buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => toggle(buttons[i]));
    }
    console.log(buttons);
};

const toggle = (button) => button.classList.toggle("pressed");

window.addEventListener("load", setup);
