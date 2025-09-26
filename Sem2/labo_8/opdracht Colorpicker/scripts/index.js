const deleteColor = (event) => {
    event.stopPropagation();

    const savedColors = document.querySelector('#savedColors');
    const colorBox = event.currentTarget.parentNode;

    const rgb = colorBox.style.backgroundColor;
    const [r, g, b] = rgb.match(/\d+/g).map(Number);



    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    storedFavorites = storedFavorites.filter(c => !(c.red == r && c.green == g && c.blue == b));
    localStorage.setItem("favorites", JSON.stringify(storedFavorites));


    savedColors.removeChild(colorBox);

}

const setup = () => {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");

    const redValue = document.getElementById("red-value");
    const greenValue = document.getElementById("green-value");
    const blueValue = document.getElementById("blue-value");

    const colorBox = document.querySelector(".color-box");

    const updateColor = () => {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        localStorage.setItem("currentColor", JSON.stringify({ red, green, blue }));
    }

    const pickColor = (event) => {
        const selectedColor = event.currentTarget.style.backgroundColor;

        const rgbMatch = selectedColor.match(/\d+/g);
        if (rgbMatch) {
            redValue.textContent = rgbMatch[0];
            greenValue.textContent = rgbMatch[1];
            blueValue.textContent = rgbMatch[2];
            redSlider.value = rgbMatch[0];
            greenSlider.value = rgbMatch[1];
            blueSlider.value = rgbMatch[2];

            updateColor();
        }
    }

    const saveColor = () => {



        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        let newColorBox = document.createElement('div')
        newColorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        newColorBox.classList.add('color-box');
        newColorBox.style.height = `120px`;
        newColorBox.style.width = `120px`;

        const savedColors = document.querySelector('#savedColors');
        savedColors.appendChild(newColorBox);

        let newXButton = document.createElement('button')
        newColorBox.appendChild(newXButton);
        newXButton.textContent = 'X';
        newXButton.classList.add('x-box');


        newXButton.addEventListener("click", deleteColor);
        newColorBox.addEventListener("click", pickColor);

        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        storedFavorites.push({ red, green, blue });
        localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    }


    // Load saved sliders from localStorage
    const savedColor = JSON.parse(localStorage.getItem('currentColor'));
    if (savedColor) {
        redSlider.value = savedColor.red;
        greenSlider.value = savedColor.green;
        blueSlider.value = savedColor.blue;
    }

    // Load saved favorites
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    savedFavorites.forEach(({ red, green, blue }) => {
        const newColorBox = document.createElement('div');
        newColorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        newColorBox.classList.add('color-box');
        newColorBox.style.height = '120px';
        newColorBox.style.width = '120px';

        const xButton = document.createElement('button');
        xButton.textContent = 'X';
        xButton.classList.add('x-box');
        newColorBox.appendChild(xButton);

        const savedColors = document.getElementById('savedColors');
        savedColors.appendChild(newColorBox);

        xButton.addEventListener("click", deleteColor);
        newColorBox.addEventListener("click", pickColor);
    });

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);
    document.querySelector('#saveColor').addEventListener("click", saveColor)

    updateColor();

};


window.addEventListener("load", setup);

