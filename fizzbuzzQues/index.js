/**
 * --Direction
 *  write a program that console logs number from 1 to n.
 *  But for multiples of 3 print 'fizz' instead of number
 *  and for the multiples of 5 print 'buzz'. for numbers
 *  which are multiple of both 3 and 5 print 'fizzbuzz'.
 *
 *  example--
 *  fizzbuzz(5);
 *  1
 *  2
 *  fizz
 *  4
 *  buzz
 * */

//Hint: for this we need modulo operator i.e % which gives us reminder 12%3=0;13%3=1;

function fizzbuzz(n) {
    for(let i=1;i<n;i++){
        if( i%3=== 0 && i%5 === 0){
            console.log('fizzbuzz');
        }else if(i%3 === 0){
            console.log('fizz');
        }else if(i%5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}