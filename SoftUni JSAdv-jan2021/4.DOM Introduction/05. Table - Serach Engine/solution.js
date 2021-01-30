function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let input = document.getElementById('searchField').value;
      let collection = document.querySelectorAll('tbody tr')
      for (const item of collection) {
         if(item.textContent.includes(input)){
            item.className = 'select';
         } else {
            item.className = '';
         }
      }
   }
}