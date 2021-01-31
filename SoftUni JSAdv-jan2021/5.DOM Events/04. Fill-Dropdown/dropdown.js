function addItem() {
    const menu = document.getElementById('menu');
    const optionElement = document.createElement('option');
    optionElement.textContent = document.getElementById('newItemText').value;
    optionElement.value = document.getElementById('newItemValue').value;
    menu.appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}