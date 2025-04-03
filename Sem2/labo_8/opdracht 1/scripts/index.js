const setup = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', calculate)
}

const calculate = () => {
    const birthdateInput = document.getElementById('Birthday');
    const birthdate = new Date(birthdateInput.value);
    console.log(birthdate);
    const datenow = new Date();
    console.log(Math.round((datenow - birthdate)/86400000));

}
window.addEventListener("load", setup);