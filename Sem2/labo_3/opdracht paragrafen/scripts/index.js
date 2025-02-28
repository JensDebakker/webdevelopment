const setup = () => {
    let ps = document.getElementsByClassName("belangrijk");
    console.log(ps);



    for (let i = 0; i < ps.length; i++) {
        ps[i].className = "belangrijk opvallend";
    }
}
window.addEventListener("load", setup);