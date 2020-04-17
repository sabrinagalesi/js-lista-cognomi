// fai un array di nomi e stampa i nomi che hanno posizione dispari

// crea un array con dei nomi
var listaNomi = [
    "Sabrina",
    "Nikolas",
    "Angela",
    "Akame",
    "Shinichi",
    "Vicky",
    "Satomi",
    "Inori",
    "Maelys",
    "Ciappino",
    "Carmine",
    "Ichigo",
    "Natsu",
    "Ryo",
    "Subaru",
    "Christian",
    "Isabella",
    "Simonetta",
    "Barbara",
]
//Ordino la lista in ordine alfabetico
listaNomi.sort();

console.log(listaNomi);

//listare l'array con la relativa posizione 
for(posizione=0; posizione < listaNomi.length; posizione++) { //Questo mi stampa tutti i nomi, sia pari che dispari
    if (posizione % 2) {
        console.log(posizione, listaNomi[posizione]); 
    } 
}