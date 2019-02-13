/**
 * --Direction
 *  write a function that accepts a string. The function should
 *  capitalise  the first  letter of each word in string  then return the
 *  capitalised string.
 *
 *  ---Examples
 *   capitalise('a sort sentence') ==> 'A Sort Sentence'
 *
 * */


/*1)
function capitalise(str) {
    const word = [];

    for(let char of str.spit(' ')){
        word.push(char[0].toUpperCase()+char.slice(1));
    }

    return word.join(' ');
}
*/


function capitalise(str) {
    let res = str[0].toUpperCase();

    for(let i =0;i<str.length; i++){
        if(str[i-1]=== ' '){
            res += str[i].toUpperCase();
        }else {
            res += str[i];
        }
    }

    return word.join(' ');
}