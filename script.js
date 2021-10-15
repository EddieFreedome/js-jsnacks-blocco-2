//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo.
// Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
//Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.

const insNumero = prompt("Inserisci un numero")

if (insNumero % 2 === 0) {
    console.log(insNumero)
} else if (insNumero % 3 === 0) {
    console.log(insNumero + 1)
}