/*
    * Traversing the DOM with JavaScript
    * View the output in the console
    * Comment all, except the the one your want to show
*/

// 1. Selecteer .characters met document.querySelector
/*
    let characters = document.querySelector('.characters');
    console.log(characters);
*/

// 2. Selecteer .humans uit .characters (Start from characters)
/*let humans = document.querySelector('.characters ul:nth-child(2)');
console.log(humans);*/

// 3. Selecteer alle mensen met querySelectorAll, beginnend bij .humans
/*let iedereen = document.querySelectorAll('.humans li');
console.log(iedereen);*/

// 4. Selecteer alle hobbits met kinderen
/*let hbs = document.querySelector('.hobbits li');
console.log(hbs);*/

// 5. Selecteer de Merry (de hobbit)
/*let hobbit = document.querySelector('.hobbits li:nth-child(3)');
console.log(hobbit);*/

// 6. Selecteer .vijanden uit Sauron
/*let Sauron = document.querySelector('.enemies li');
let vijand = Sauron.parentElement;
console.log(vijand)*/

// 7. Selecteer de .characters div van Nazgûl
/*let Nazgûl = document.querySelector('.enemies li:nth-child(2)');
let karakter = Nazgûl.parentElement.parentElement;
console.log(karakter);*/

// 8. Selecteer Elrond uit Glorfindel
/*let glorfindel = document.querySelector('.elves li:nth-child(2)');
let elrond = glorfindel.nextElementSibling;
console.log(elrond);*/

// 9. Selecteer Legolas uit Glorfindel
/*let glorfindel = document.querySelector('.elves li:nth-child(2)');
let legolas = glorfindel.previousElementSibling;
console.log(legolas);*/

// 10. Selecteer Arwen uit Glorfindel
let glorfindel = document.querySelector('.elves li:nth-child(2)');
let arwen = glorfindel.nextElementSibling.nextElementSibling;
console.log(arwen);
