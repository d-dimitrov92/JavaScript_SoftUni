window.addEventListener('load', solution);
async function solution() {

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const response = await fetch(url);
    const data = await response.json();

    const titles = Object.values(data)
    titles.map(createCard).forEach(element => {
        main.appendChild(element);
    });
}

function createCard(t) {
    const main = document.getElementById('main')
    const hiddenP = createElement('p', undefined);
    const hiddenDiv = createElement('div', undefined, 'extra');
    hiddenDiv.appendChild(hiddenP);

    const titleSpan = createElement('span', t.title);
    const moreBtn = createElement('button', 'More', 'button');
    moreBtn.id = t._id;
    const headDiv = createElement('div', undefined, 'head');
    const titleDiv = createElement('div', undefined, 'accordion');
    headDiv.appendChild(titleSpan);
    headDiv.appendChild(moreBtn);
    titleDiv.appendChild(headDiv);
    titleDiv.appendChild(hiddenDiv);
    
    moreBtn.addEventListener('click', ()=>toggle(t._id))

    async function toggle(id) {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;
        let more = document.getElementById(id)
        
        const response = await fetch(url);
        const data = await response.json();
        
        hiddenP.textContent = data.content;
    
        hiddenDiv.style.display = hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '' ? 'block' : 'none';
        more.textContent = more.textContent === 'More' ? 'Less' : 'More'
    }
    return titleDiv;
}

function createElement(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
        result.className = className;
    }
    return result;
}