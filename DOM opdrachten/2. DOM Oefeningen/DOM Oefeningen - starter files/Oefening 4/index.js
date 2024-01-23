const app = document.getElementById('list-app');

// Een lege array om de lijst met items bij te houden
const items = [];

// Een functie om de lijst opnieuw te renderen
function renderList() {
  // Leeg de inhoud van de app-div
  app.innerHTML = '';

  // Maak een nieuwe ul (unordered list)
  const ul = document.createElement('ul');

  // Loop door de items en voeg ze toe aan de ul
  items.forEach((item, index) => {
    const li = document.createElement('li');

    // Voeg een contenteditable span toe voor bewerking
    const span = document.createElement('span');
    span.textContent = item;
    span.contentEditable = true;

    // Voeg een knop toe om een item te verwijderen
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Verwijder';
    deleteButton.addEventListener('click', () => {
      items.splice(index, 1);
      renderList();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });

  // Voeg een invoerveld en knop toe om nieuwe items toe te voegen
  const newItemInput = document.createElement('input');
  newItemInput.placeholder = 'Voeg een nieuw item toe';
  const addItemButton = document.createElement('button');
  addItemButton.textContent = 'Toevoegen';

  addItemButton.addEventListener('click', () => {
    const newItemText = newItemInput.value.trim();
    if (newItemText) {
      items.push(newItemText);
      renderList();
      newItemInput.value = '';
    }
  });

  // Voeg alle elementen toe aan de app-div
  app.appendChild(newItemInput);
  app.appendChild(addItemButton);
  app.appendChild(ul);
}

// Roep de renderList-functie aan om de initiële lijst weer te geven
renderList();
