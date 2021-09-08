// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

var totalePeso = 0;

for (var i=0; i<arrZucchine.length; i++){
    console.log(arrZucchine[i].peso);
    totalePeso += arrZucchine[i].peso;
}


console.log(totalePeso);

