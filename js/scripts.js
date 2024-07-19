let x = 33;
let y = 52;

// Chiamata o invocazione della funzione
const result = sum(x, y);
console.log('result', result, typeof result);

// console.log('Ciao ragazzi');
// console.log('come va?');

// x = parseInt(prompt('x:'));
// y = parseInt(prompt('y:'));

// sum(x, y);

// console.log('Ce sto a capì 2');
// console.log('meno male che è venerdì');

// const a = 77;
// const b = 22;

// sum(b, a);

// sum(43, b);

/* 
    Functions
*/
// Definizione
        // numOne e numTwo si chiamano parametri o argomenti (o input) della funzione
function sum(numOne, numTwo) {
    console.log('numOne', numOne, typeof numOne);
    console.log('numTwo', numTwo, typeof numTwo);

    const res = numOne + numTwo;
    console.log('numOne + numTwo =', res);

    return res;
}


/* 
    - Le funzioni possono avere un nome
    - Le funzioni possono avere uno o più argomenti
    - Le funzioni possono restituire un (solo) valore
    - NON TUTTE LE FUNZIONI DEVONO AVERE ARGOMENTI
    - NON TUTTE LE FUNZIONI DEVONO AVERE RETURN


    1. funzione senza argomenti e senza return
    2. funzione con argomenti e con return
    3. funzione con argomenti, ma senza return
    4. funzione senza argomenti, ma con return
*/


/* 
    Voglio creare una funzione che mi dica se un numero è pari o meno
*/
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

    /* OPPURE */

    // if (num % 2 == 0) {
    //     return true;
    // }

    // return false;
}

console.log('Il numero 6 è pari?', isEven(6));

const userNumber = parseInt(prompt('Inserisci un numero:'));

console.log('Il numero ' + userNumber + ' è pari?', isEven(userNumber));