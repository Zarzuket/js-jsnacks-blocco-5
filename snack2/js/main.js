// alert("ciao");
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var arrZucchine = [
    {
        "varieta": "zucchina1",
        "peso": 10,
        "lunghezza" : 100
    },
    {
        "varieta": "zucchina2",
        "peso": 220,
        "lunghezza" : 10
    },
    {
        "varieta": "zucchina3",
        "peso": 50,
        "lunghezza" : 25
    },
    {
        "varieta": "zucchina4",
        "peso": 70,
        "lunghezza" : 276
    },
    {
        "varieta": "zucchina5",
        "peso": 110,
        "lunghezza" : 10
    },
    {
        "varieta": "zucchina6",
        "peso": 350,
        "lunghezza" : 24
    },
    {
        "varieta": "zucchina7",
        "peso": 60,
        "lunghezza" : 3
    },
    {
        "varieta": "zucchina8",
        "peso": 80,
        "lunghezza" : 600
    },
    {
        "varieta": "zucchina9",
        "peso": 100,
        "lunghezza" : 25
    },
    {
        "varieta": "zucchina10",
        "peso": 25,
        "lunghezza" : 90
    },
]

var arrZucchineMeno = [];
var arrZucchinePiu = [];
var pesoZucchineMeno = 0;
var pesoZucchinePiu = 0;

for (var i=0; i<arrZucchine.length; i++){
    console.log(arrZucchine[i].lunghezza);
    if (arrZucchine[i].lunghezza < 15){
        arrZucchineMeno.push(arrZucchine[i]);
        pesoZucchineMeno += arrZucchine[i].peso;
    } else {
        arrZucchinePiu.push(arrZucchine[i]);
        pesoZucchinePiu += arrZucchine[i].peso;
    }
}

console.log(arrZucchineMeno);
console.log(`peso totale zucchine corte: ${pesoZucchineMeno}g`)
console.log(arrZucchinePiu);
console.log(`peso totale zucchine lunghe: ${pesoZucchinePiu}g`)