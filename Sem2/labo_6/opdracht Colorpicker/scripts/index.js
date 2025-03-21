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
    }

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);
    
    updateColor();

    const saveColor = () => {

        let newColorBox = document.createElement('div')
        let newXButton = document.createElement('button')
        newXButton.textContent = 'X';
        newXButton.classList.add('x-box');

        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        newColorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        newColorBox.classList.add('color-box');
        newColorBox.style.height = `120px`;
        newColorBox.style.width = `120px`;

        const savedColors = document.querySelector('#savedColors');
        savedColors.appendChild(newColorBox);
        newColorBox.appendChild(newXButton);
        newXButton.addEventListener("click", deleteColor);
        newColorBox.addEventListener("click", pickColor);
    }

    document.querySelector('#saveColor').addEventListener("click", saveColor)

    const pickColor = (event) => {
        const selectedColor = event.currentTarget.style.backgroundColor;

        colorBox.style.backgroundColor = selectedColor;

        const rgbMatch = selectedColor.match(/\d+/g);
        if (rgbMatch) {
            redValue.textContent = rgbMatch[0];
            greenValue.textContent = rgbMatch[1];
            blueValue.textContent = rgbMatch[2];
            redSlider.value = rgbMatch[0];
            greenSlider.value = rgbMatch[1];
            blueSlider.value = rgbMatch[2];
        }
    }

    const deleteColor = (event) => {
        const savedColors = document.querySelector('#savedColors');
        const colorBox = event.currentTarget.parentNode;

        colorBox.removeChild(event.currentTarget);
        savedColors.removeChild(colorBox);
    }

};


window.addEventListener("load", setup);
