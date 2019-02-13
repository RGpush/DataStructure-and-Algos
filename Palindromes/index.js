/** --Directions
 *  Given a string return true if the string is palindrome
 *  or false if it is not. Palindromes are strings that form the same
 *  word if it reversed. --DO-- includes spaces and punctuation in determining if
 *  the string is palindrome.
 *
 *  Examples:
 *  palindrome('abba')==== true
 *  palindrome('abcdefg') ==== false
 * */

/*
1) ----
function palindrome(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}


2) ---
function palindrome(str) {

   return str.split('').every((char,i)=>{return char === str[str.length -i -1]});

}*/
