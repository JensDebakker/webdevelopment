const setup = () => {
 //let btnSubstring = document.getElementById('substring');
 //btnSubstring.addEventListener('click', calculate); why not work?


    document.getElementById("calculate").addEventListener('click', calculate);
}

const calculate = () => {
    const input = document.getElementById("input").value;
    const arg1 = document.getElementById("para1").value;
    const arg2 = document.getElementById("para2").value;
    let output = document.getElementById("output");
    const calculation = input.substring(arg1, arg2);

    console.log(calculation);

    document.getElementById("output").textContent = calculation;
};

window.addEventListener("load", setup);