//Chiedere all'utente di inserire una parola.
const userWord = prompt('Inserisci una parola e scopri se è palindroma'); //String
//Scrittura variabile che controllerà se la parola sia palindroma o meno.
const palindrome = false;

//Scrittura funzione.
function isPalindrome(string){
    //Rendere il testo tutto minuscolo.
    const lowerCaseUserWord = userWord.toLowerCase();
    //Dichiarazione delle variabili che serviranno a confrontare le parole.
    let word = letterIndex,
    ReversedWord = letterReverseIndex
    

    for(let i = 0; i < lowerCaseUserWord.length; i++){
        const letterIndex = lowerCaseUserWord[i]; //String
           
    }

    for(let reverseI = lowerCaseUserWord.length - 1; reverseI >= 0; reverseI--){
        const letterReverseIndex = lowerCaseUserWord[reverseI];//String

    }

    
    
}

isPalindrome(userWord);

