function search() {
   let townsCollection = document.querySelectorAll('#towns>li');
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');
   let count = 0;
   for (let li of townsCollection) {
      if((li.textContent).toLowerCase().includes(input.toLowerCase())){
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline'
         count++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }
   result.textContent = `${count} matches found`
}