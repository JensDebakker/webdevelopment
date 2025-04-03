const setup = () => {

    document.getElementById('toonResultaat').addEventListener('click', () => {
        CheckKipStaat();
    })

    const note = document.getElementById('note');

    const CheckKipStaat = () => {
        const KipStaat = document.getElementById('kipstaat').value;

        console.log(KipStaat);

        const image = document.getElementById('img');

        if (KipStaat === 'kies') {
            image.classList.toggle('hidden');
        }
        if (KipStaat === 'ei') {
            image.classList.toggle('with-egg');

        }

        if (KipStaat === 'noei') {
            image.classList.toggle('with-egg');
        }
    }
}
window.addEventListener("load", setup);