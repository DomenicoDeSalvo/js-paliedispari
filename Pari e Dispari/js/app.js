
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
let userNumber = ''; //Number
//Acquisizione del bottone per confermare la scelta del numero.
const submitElement = document.querySelector('.submit'); //Element || Null.
//Cliccando il bottone, il numero scelto dall'utente verrà assegnato alla variabile userNumber e si passerà alla fase finale.
//Acquisire la classe della terza fase.
const outcomeElement = document.querySelector('.outcome'); //Element || Null

submitElement.addEventListener('click', function(){
    userNumber = inputNumberChoiceElement.value //string
    secondtPartElement.classList.add('hidden'); //Element || Null
    outcomeElement.classList.remove('hidden'); //Element || Null
    console.log(userNumber);
    
})

//Creazione della funzione.
function isSumEven (userNumber, computerNumber){
    const sum = userNumber + computerNumber;
    const rest = sum % 2;

    if (rest === 0) {
        return true
    } else {
        return false
    }
}

