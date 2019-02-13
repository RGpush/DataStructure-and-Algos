// reverse thie given string
// Examples
// reverse('apple') === 'elppa'
// reverse('Greetings!') === '!sgniteerG'





/* 1) first and simple solution
function reverse(str){
    return str.split('').reverse().join('');
}

2) Using for loop Note: here we are adding reversed variable later
if you missed it and add it before you will return you the same str.

function reverse(str){
    let reversed = '';
    for(let i=0;i<str.length;i++){
        reversed = str[i] + reversed;

}
return reversed;
}

*/

// 3) this solution is too showcase ES6 features also
// as reduce take first element and we have passed empty string for the initial value of it

function reverse(str){
  return str.split('').reduce((rev,char)=>{ return char + rev; },'');
}
