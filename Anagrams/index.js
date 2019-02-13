/**
 * --Directions
 * Check to see if two provided strings are anagrams of eachother.
 * One string is anagrams of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces or punctuation.
 * consider capital letters to be the same as lower case.
 *
 * Examples--
 *  anagrams('rail safety', 'fairy tales') === true
 *  anagrams('Hi there', 'Bye there') === false
 *
 * */

function anagrams(str1,str2){
    return filterChara(str1) === filterChara(str2);
}

function filterChara(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

/*
function anagrams(str1,str2) {
    const charStr1 = filterChara(str1);
    const charStr2 = filterChara(str1);

    if(Object.keys(charStr1).length !== Object.keys(charStr2).length){
        return false;
    }

    for(let char in charStr1){
        if(charStr1[char] !== charStr2[char]){
            return false;
        }
    }
    return true;
}


function filterChara(str){
    const char = {};

    for(let item of str.replace(/[^\w]/g,'').toLowerCase()){
        char[item] = char[item] + 1 || 1;
    }
    return char;
}*/
