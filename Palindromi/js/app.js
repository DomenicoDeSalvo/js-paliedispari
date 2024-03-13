//Chiedere all'utente di inserire una parola.
const userWord = prompt('Inserisci una parola e scopri se è palindroma'); //String

//Scrittura funzione.
function isPalindrome(string){
    //Rendere il testo tutto minuscolo.
    const lowerCaseUserWord = userWord.toLowerCase();
    //Dichiarazione delle variabili che serviranno a confrontare le parole.
    let letterIndex = ''; //String
    let letterReverseIndex = ''; //String
    
    for(let i = 0; i < lowerCaseUserWord.length; i++){
        letterIndex = lowerCaseUserWord[i]; //String
   
    }

    for(let reverseI = lowerCaseUserWord.length - 1; reverseI >= 0; reverseI--){
        letterReverseIndex = lowerCaseUserWord[reverseI];//String

    }

    //Confronto delle due parole.
    
    if(letterIndex === letterReverseIndex ){
        console.log(userWord + ' è una parola palindroma');
        return true
        
    } else {
        console.log(userWord + ' non è una parola palindroma');
        return false
    }
}

isPalindrome(userWord);

const result = isPalindrome(userWord);
console.log(result)

