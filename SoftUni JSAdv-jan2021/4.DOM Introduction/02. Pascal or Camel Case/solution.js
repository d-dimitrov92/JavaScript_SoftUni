function solve() {
  let input = document.getElementById('text').value.toLowerCase().split(' ');
  let convertTo = document.getElementById('naming-convention').value;
  let result = []
  if(convertTo == 'Pascal Case'){
    for (let word of input) {
      let newWord = word[0].toUpperCase() + word.slice(1);
      result.push(newWord)
    }
    result = result.join('');
    document.getElementById('result').textContent = result;
  } else if(convertTo == 'Camel Case'){
    result.push(input[0])
    for (let i = 1; i < input.length; i++) {
      let newWord = input[i][0].toUpperCase() + input[i].slice(1);
      result.push(newWord);
    }
    result = result.join('');
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}