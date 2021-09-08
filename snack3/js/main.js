// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

var parola = prompt("inserisci una parola per verificare se è palindroma")

var palindroma = '';

console.log(pali(palindroma , parola))


function pali(){
    for (i=parola.length-1; i>-1; i--){
        palindroma += parola[i];
    }
    if (palindroma != parola){
        return palindroma;
    }
}
