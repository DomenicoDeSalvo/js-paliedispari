//Chiedere all'utente di inserire una parola.
const userWord = prompt('Inserisci una parola e scopri se è palindroma'); //String

//Scrittura funzione.
function isPalindrome(text){
    //Rendere il testo tutto minuscolo e separarne le lettere.
    const toLowerCaseUserWord = userWord.toLowerCase();
    const userWordLetters = toLowerCaseUserWord.split('');
    //Dichiarazione delle variabile che rappresenterà la parola al contrario.
    let reverseUserWord = ''; //String
    
    for(let i = 0; i < userWordLetters.length; i++){
        //Prendere ad una ad una le lettere della parola partendo dalla fine.
        const reverseLetters = userWordLetters.at(-1 - i);
        reverseUserWord += reverseLetters
   
    }

    //Confronto delle due parole.
    
    if(toLowerCaseUserWord === reverseUserWord ){
        return true
        
    } else {
        return false
    }
}

isPalindrome(userWord);

let result = isPalindrome(userWord);

if(result === true){
    console.log(userWord + ' è una parola palindroma');
} else {
    console.log(userWord + ' non è una parola palindroma');
}

