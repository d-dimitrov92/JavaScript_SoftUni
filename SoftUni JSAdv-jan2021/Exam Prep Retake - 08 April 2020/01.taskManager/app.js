function solve() {

    const inputTask = document.querySelector('#task');
    const inputDescription = document.querySelector('#description');
    const inputDate = document.querySelector('#date');
    const openDiv = document.querySelectorAll('section')[1].children[1];
    const inProgressDiv = document.querySelectorAll('section')[2].children[1];
    const completeDiv = document.querySelectorAll('section')[3].children[1];
    document.querySelector('#add').addEventListener('click', (e) => {
        e.preventDefault();
        if (inputTask.value == '' || inputDescription == '' || inputDate == '') {
            return;
        }
        //console.log(openDiv.parentNode.children[1].children[0].children[2].textContent);
        const startBtn = createElement('button', 'Start', 'green');
        const deleteBtn = createElement('button', 'Delete', 'red');
        const finishBtn = createElement('button', 'Finish', 'orange')
        const innerDiv = createElement('div', undefined, 'flex');
        const pDate = createElement('p', `Due Date: ${inputDate.value}`);
        const pDescr = createElement('p', `Description: ${inputDescription.value}`);
        const header = createElement('h3', inputTask.value);
        const art = createElement('article');

        openDiv.appendChild(art);
        art.appendChild(header);
        art.appendChild(pDescr);
        art.appendChild(pDate);
        art.appendChild(innerDiv);
        innerDiv.appendChild(startBtn);
        innerDiv.appendChild(deleteBtn);


        startBtn.addEventListener('click', () => {
            deleteItem(art);
            inProgressDiv.appendChild(art);
            deleteItem(startBtn);
            innerDiv.appendChild(deleteBtn);
            innerDiv.appendChild(finishBtn);
        })

        deleteBtn.addEventListener('click', () => deleteItem(art));
        finishBtn.addEventListener('click', () => {
            deleteItem(art);
            completeDiv.appendChild(art);
            deleteItem(deleteBtn);
            deleteItem(finishBtn);
        })
    })

    function deleteItem(item) {
        item.remove();
    }

    function createElement(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}