/**
 * ---Directions
 *  Given a string, return the character that is most commonly used in the string.
 *  --- Examples
 *  maxChar('abccccd') === 'c'
 *  maxChar('1231111') === '1'
 *
 * */


function maxChar(str) {
   const charMax = {};
    let max = 0;
    let maxChar = '';
    // for array we use
    for(let char of str){
        if(!charMax[char]){
            charMax[char] = 1;
        }else {
            charMax[char]++;
        }
    }

    // for object we use in
    for(let char in charMax){
        if(charMax[char] > max){
            max = charMax[char];
            maxChar = char;
        }
    }

    return maxChar;

}