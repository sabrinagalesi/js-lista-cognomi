/* Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente. 
Scrivi anche la posizione della lista in cui  il nuovo utente si trova 
Lista task: 
-creare prompt con richiesta cognome
-creare array con lista cognomi
-pushare il cognome richiesto nell'array di cognomi
-ordinare la lista alfabeticamente, stampare la lista sulla pagina
-ciclo
-ricerca del cognome
-prendi la posizione*/

var richiesta = prompt("Inserisci il tuo cognome");

var listaCognomi = [
    "Condello",
    "Mosca",
    "Ferrato",
    "Galesi",
    "Berenati",
    "Rossi",
    "Blanco",
    "Piscopo",
    "Ravalli",
    "De Maria",
];

listaCognomi.push(richiesta);

listaCognomi.sort()

console.log(listaCognomi);

//listiamo l'array
for(var posizione=0; posizione < listaCognomi.length; posizione++) {
    var cognome = listaCognomi[posizione]; //Ottengo l'elemento corrente

    console.log(posizione, '=>', cognome); //Questa è la posizione
    if(cognome == richiesta) {
        console.log("posizione richiesta", posizione);
    }
}

//scrivi la posizione con un alert fuori dal for

