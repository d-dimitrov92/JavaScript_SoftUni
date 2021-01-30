function create(words) {
   const content = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = words[i];
      paragraph.style.display = 'none'
      div.appendChild(paragraph);
      div.addEventListener('click', (ev) => {
         const p = ev.target.children[0];
         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block';
      })
      content.appendChild(div);
   }
}