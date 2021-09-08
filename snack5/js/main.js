// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

// funzione(array, a(<b) , b>=(array))
// la funzione ritorna un nuovo array con i valori che hanno la posione compresa tra a e b

// funzione
function arrayOfXY(arr, x , y){
    newArray = [];
        for (var i=0; i<arr.length; i++){
            if (i >= x && i<=y){
                newArray.push(arr[i]);
            }
        }
    
    return newArray;
}



var array5 = [1,2,3,4,5,6,7,8,9,10]
var num1 = parseInt(prompt("inserisci un numero da 1 a" + array5.length));
var num2 = parseInt(prompt("inserisci un numero da 1 a" + array5.length));



while(isNaN(num2) || num2 > array5.length){
    num2 = parseInt(prompt("il valore inserito non è corretto"));
}
while(isNaN(num1) || num1 > num2 || num1>array5.length){
    num1 = parseInt(prompt("attento non hai inserito il numero correttamente"));
}
arrayOfXY(array5 , num1 , num2);
console.log(newArray);






// arrayOfXY(array5,num1,num2);
// console.log(newArray);

