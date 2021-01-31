function solve() {
  const textAreas = document.querySelectorAll('#exercise textarea');
  const input = textAreas[0]
  let table = document.querySelector('.table tbody');
  const buttons = document.querySelectorAll('button');
  buttons[0].addEventListener('click', (ev) => {
    let furnitures = JSON.parse(input.value);
    for (let i = 0; i < furnitures.length; i++) {
      let furniture = furnitures[i]
      let newRow = document.createElement('tr');

      let newImageBox = document.createElement('td');
      let newImage = document.createElement('img');
      newImage.src = furniture.img;
      newImageBox.appendChild(newImage);
      newRow.appendChild(newImageBox);

      let furnitureName = document.createElement('td');
      let furnitureNameP = document.createElement('p');
      furnitureNameP.textContent = furniture.name;
      furnitureName.appendChild(furnitureNameP);
      newRow.appendChild(furnitureName);

      let price = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = furniture.price;
      price.appendChild(priceP);
      newRow.appendChild(price);

      let decFactor = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = furniture.decFactor;
      decFactor.appendChild(decFactorP);
      newRow.appendChild(decFactor);

      let mark = document.createElement('td');
      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox'
      mark.appendChild(checkBox);
      newRow.appendChild(mark);
      table.appendChild(newRow);
    }
    buttons[1].addEventListener('click', (ev) => {
      const furniture = Array.from(table.querySelectorAll('input[type=checkbox]:checked'))
      .map(input => input.parentNode.parentNode);

      let result = {
        bought: [],
        totalPrice: 0,
        decFactorSum: 0
      }

      for (const row of furniture) {
      const cells = row.children;
      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      let price = Number(cells[2].children[0].textContent);
      result.totalPrice += price;

      let decF = Number(cells[3].children[0].textContent);
      result.decFactorSum += decF;
      }
      textAreas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactorSum/furniture.length}`
    })
  })
}