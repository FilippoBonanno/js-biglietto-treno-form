

// const ages = prompt("Quanti anni hai?");

// const inputElement2 = document.getElementById("input2"); // Sostituisci "mioInput" con l'ID del tuo input
// const ages = inputElement2;

// const inputElement = document.getElementById("input1"); // Sostituisci "mioInput" con l'ID del tuo input
// const km = inputElement;


// let element1 = document.getElementById("km_request");
// element1.addEventListener ('click' ,
//     function() {
         
//         console.log( `anni: ${ages}` );

//     }

// );

// let element2 = document.getElementById("ages_request");
// element2.addEventListener ('click' ,
//     function() {
         
//         console.log( `Km da percorrere: ${km}` );

//     }

// );

// let prize_km = 0.21

// let discount20 = 0.2

// let discount40 = 0.4







// KILOMETRI
const buttonKm = document.getElementById('km_button');

const kmInput = document.querySelector('#km-input');
console.log('kmInput.value', kmInput.value);


buttonKm.addEventListener('click', function() {

    console.log( `Km da percorrere: ${kmInput.value}`);

});

// ANNI
const buttonAges = document.getElementById('ages_button');

const AgesInput = document.querySelector('#ages-input');
console.log('AgesInput.value', AgesInput.value);


buttonAges.addEventListener('click', function() {

    console.log( `Anni: ${AgesInput.value}`);

});

let prize_km = 0.21

let discount20 = 0.2

let discount40 = 0.4


if (AgesInput < 18) {

    let ticketprize = ((prize_km * kmInput) - (prize_km * km * discount20))
     console.log( `Prezzo biglietto: ${ticketprize.toFixed(1)}€`);
     document.getElementById("final-prize").innerText = `${ticketprize.toFixed(2)}€ Già scontato del 20%`;


 } else if (AgesInput > 65 ) {

     let ticketprize = ((prize_km * kmInput) - (prize_km * km * discount40))
     console.log( `Prezzo biglietto: ${ticketprize.toFixed(1)}€`);
     document.getElementById("final-prize").innerText = (`${ticketprize.toFixed(2)}€ Già scontato del 40%`);
    

 } else {

     let ticketprize = prize_km * kmInput 
     console.log( `Prezzo biglietto: ${ticketprize.toFixed(1)}€`);
     document.getElementById("final-prize").innerText = (`${ticketprize.toFixed(2)}€`);

 }
