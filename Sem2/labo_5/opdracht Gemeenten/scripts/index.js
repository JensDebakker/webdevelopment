const setup = () => {

    let gemeenten = [];
    let invoer;

// Vraag de gebruiker om gemeenten in te voeren
    while (true) {
        invoer = window.prompt("Voer een gemeente in (of typ 'stop' om te stoppen):");
        if (invoer === null || invoer.toLowerCase() === "stop") {
            break;
        }
        if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

// Sorteer alfabetisch
    gemeenten.sort();

// Gemeenten toevoegen aan de keuzelijst
    let selectBox = document.getElementById("gemeenteSelect");

    gemeenten.forEach(gemeente => {
        let optie = document.createElement("option");
        optie.textContent = gemeente;
        selectBox.appendChild(optie);
    });


}
window.addEventListener("load", setup);