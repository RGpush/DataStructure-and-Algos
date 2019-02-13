/** --Directions
 *  Given an Integer, return  an integer that is the reverse
 *  ordering of numbers.
 *
 *  Examples--
 *  reverse(51)==== 15
 *  reverse(2563)==== 3652
 *  reverse(500)==== 5
 *  reverse(-90)==== -9
 *  reverse(-51)==== -15
 *
 * */


function reverseInt(n) {
     const reverse = n.toString().split('').reverse().join('');

    /* if(n<0) {
         return parseInt(reverse)* (-1);
     }

    return parseInt(reverse);

    ----or---
    */
    return parseInt(reverse) * Math.sign(n);
}