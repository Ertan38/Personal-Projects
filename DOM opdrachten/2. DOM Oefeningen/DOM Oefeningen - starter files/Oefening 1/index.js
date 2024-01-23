const namenLijst = ['Izzy van Gisteren', 'Annebelle Blaas', 'Piet Saman', 'Coos Busters'];

const listContainer = document.querySelector('#lijst');

const ul = document.createElement('ul');

namenLijst.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item; 
  ul.appendChild(li); 
});

listContainer.appendChild(ul);
