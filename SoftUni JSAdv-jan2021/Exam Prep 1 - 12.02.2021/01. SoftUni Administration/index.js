function solve() {
    const addBtn = document.querySelector('.form-control>button');
    const sections = document.querySelectorAll('section');
    const trainingsSection = sections[0];
    const administrationSections = sections[1];
    const form = document.querySelector('form');
    const lectureName = form.children[0].children[1];
    const date = form.children[1].children[1]
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(date.value);
        if(date.value == ''){
            console.log(`tup`);
            return;
        }
    })
};