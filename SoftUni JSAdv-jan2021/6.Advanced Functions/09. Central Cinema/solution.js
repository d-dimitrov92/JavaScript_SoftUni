function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = Array.from(formElements).slice(0, formElements.length - 1);
    const onScreenBtn = Array.from(formElements).slice(formElements.length - 1)[0];
    const moviesUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    const clearBtn = document.querySelector('#archive>button');

    function clearArchive(e) {
        e.target.parentNode.children[1].innerHTML = '';
    }

    function archive(e) {
        const li = e.target.parentNode.parentNode;
        const div = e.target.parentNode;
        const input = div.children[1];

        if (!Number(input.value)) { return; }

        const archiveLi = document.createElement('li');
        const name = li.children[0].textContent;
        const span = document.createElement('span');
        span.textContent = name;
        archiveLi.appendChild(span);

        const price = Number(div.children[0].textContent);
        const totalPrice = price * Number(input.value);
        const strong = document.createElement('strong');
        strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
        archiveLi.appendChild(strong)

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })
        archiveLi.appendChild(deleteBtn);

        archiveUl.appendChild(archiveLi);

        li.remove();
    }

    function createMovie(e) {
        e.preventDefault();

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = Number(inputs[2].value);

        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

        if (!name || !hall || !price) { return; } // check for falsey values

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(strong);

        let div = document.createElement('div');
        let innerStrong = document.createElement('strong');
        innerStrong.textContent = price.toFixed(2);
        div.appendChild(innerStrong);

        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold')
        div.appendChild(input);

        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = 'Archive'
        div.appendChild(archiveBtn);

        li.appendChild(div);
        moviesUl.appendChild(li);

        archiveBtn.addEventListener('click', archive);
    }
    clearBtn.addEventListener('click', clearArchive)
    onScreenBtn.addEventListener('click', createMovie);
}