const km = prompt("Quanti km vuoi percorrere?"); 
console.log( `Km da percorrere: ${km}` );

const ages = prompt("Quanti anni hai?"); 
console.log( `anni: ${ages}` );

let prize_km = 0.21

let discount20 = 0.2

let discount40 = 0.4


if (ages < 18) {

    let ticketprize = ((prize_km * km) - (prize_km * km * discount20))
    console.log( `Prezzo biglietto: ${ticketprize.toFixed(1)}€`);
    document.getElementById("final-prize").innerText = `${ticketprize.toFixed(2)}€ Già scontato del 20%`;


} else if (ages > 65 ) {

    let ticketprize = ((prize_km * km) - (prize_km * km * discount40))
    console.log( `Prezzo biglietto: ${ticketprize.toFixed(1)}€`);
    document.getElementById("final-prize").innerText = `${ticketprize.toFixed(2)}€ Già scontato del 40%`;
    

} else {

    let ticketprize = prize_km * km 
    console.log( `Prezzo biglietto: ${ticketprize.toFixed(1)}€`);
    document.getElementById("final-prize").innerText = `${ticketprize.toFixed(2)}€`;

}