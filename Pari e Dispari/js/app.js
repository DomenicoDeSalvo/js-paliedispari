
//Acquisire la scelta tra pari o dispari.
//Acquisire i bottoni.
const oddButtonElement = document.querySelector('.odd');
const evenButtonElement = document.querySelector('.even');
//Assicurarsi che dopo aver cliccato uno dei bottoni, entrambi spariscano ed appaia la fase successiva del gioco.
//Acquisire la classe della fase da far sparire.
const firstPartElement = document.querySelector('.first_part'); //Element || Null
//Acquisire la classe della fase da far apparire.
const secondtPartElement = document.querySelector('.second_part'); //Element || Null

//Dichiarare una variabile per la scelta dell'utente
let userBet = '';

//Codice per cambiare fase del gioco e per assegnare il valore selezionato all'utente

oddButtonElement.addEventListener('click', function(){
firstPartElement.classList.add('hidden'); //Element || Null
secondtPartElement.classList.remove('hidden'); //Element || Null
userBet = 'odd'; //String
})
evenButtonElement.addEventListener('click', function(){
firstPartElement.classList.add('hidden'); //Element || Null
secondtPartElement.classList.remove('hidden'); //Element || Null
userBet = 'even'; //String
})

//Acquisire il numero scelto dall'utente.
const inputNumberChoiceElement = document.querySelector('.user_number');//Element | Null
//Dichiarare la variabile a cui assegnarlo.
let userNumber = ''; //String
//Dichiarare una variabile per il numero che sarà assegnato al computer.
let computerNumber = ''//String
//Acquisizione del bottone per confermare la scelta del numero.
const submitElement = document.querySelector('.submit'); //Element || Null.
//Cliccando il bottone, il numero scelto dall'utente verrà assegnato alla variabile userNumber e si passerà alla fase finale.
//Acquisire la classe della terza fase.
const resultElement = document.querySelector('.result'); //Element || Null

submitElement.addEventListener('click', function(){
    userNumber = parseInt(inputNumberChoiceElement.value) //string
    secondtPartElement.classList.add('hidden'); //Element || Null
    resultElement.classList.remove('hidden'); //Element || Null
    resultElement.classList.add('shown'); //Element || Null
    //Atribuire un numero al computer.
    computerNumber = parseInt(Math.floor(Math.random() * 5 + 1)); //Number
    console.log(userNumber, computerNumber);
    //Insermiento della funzione.
    const result = isSumEven(userNumber, computerNumber);//String
    console.log(result);
    //Mostrare i risultati attribuiti ai giocatori.
    const userElement = document.querySelector('.number_user'); //Element | Null
    const computerElement = document.querySelector('.number_computer'); //Element | Null
    userElement.innerHTML = userNumber; //number
    computerElement.innerHTML = computerNumber; //Number
    //Ed il totale.
    const sumElement = document.querySelector('.number_sum'); //Element | Null
    sumElement.innerHTML = sum(userNumber, computerNumber); //Number
    
})


// FUNZIONI
//Creazione della funzione necessaria a capire se il numero sia pari o meno.
function isSumEven (number1, number2){
    const sum = number1 + number2;
    const rest = sum % 2;

    if (rest === 0) {
        return true 
    } else {
        return false 
    }
}

//Funzione per la somma.
function sum (number1, number2){
    const sum = number1 + number2;

    return sum
}



