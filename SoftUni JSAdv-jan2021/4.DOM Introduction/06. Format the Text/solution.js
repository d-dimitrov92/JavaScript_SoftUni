function solve() {
  const text = document.getElementById('input').value;
  let count = 0;
  let sentences = text.split('.');
  console.log(sentences.length);
  let result = [];
  while (sentences.length > 0) {
    let sentence = sentences.shift();
    if (sentence.length > 0) {
      result.push(sentence);
    }
    console.log(result.length);
    if (result.length % 3 === 0) {
      document.getElementById('output').innerHTML += `<p>${result.join('.')}</p>`;
      result = []
    }
    if (sentences.length < 3 && sentences.length != 0) {
      document.getElementById('output').innerHTML += `<p>${sentences.join('.')}</p>`;
      break;
    }
  }
}