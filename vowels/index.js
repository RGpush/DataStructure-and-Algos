/**
 * ---Direction
 *  write a function that returns the number of vowels
 *  used i a string.
 *  example--
 *  vowels('hi There!') ---> 3
 *
 * */


function vowels(str) {
    let count = 0;
    const vowel = 'aeiou';
    for(let char of str.toLowerCase()){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}


// ---or----

function vowel(str) {
    const match = str.match(/[aieou]/gi);
    return match ? match.length : 0
}