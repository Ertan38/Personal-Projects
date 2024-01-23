// Zoek alle ongeordende lijsten op de pagina
var ulElements = document.querySelectorAll('ul');

// Loop door elke ongeordende lijst
ulElements.forEach(function(ulElement) {
    // Zoek alle lijstitems in de huidige lijst
    var liElements = ulElement.querySelectorAll('li');

    // Wijzig de tekst van het eerste lijstitem naar 'Eerste item'
    liElements[0].textContent = 'Eerste item';

    // Wijzig de tekst van het laatste lijstitem naar 'Laatste item'
    liElements[liElements.length - 1].textContent = 'Laatste item';
});
