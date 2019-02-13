/**
 * --Directions
 * write a function that accepts a positive number N.
 * the function should console log a step shape with N levels using
 * the # character. Make sure the steps has spaces on the right hand side!
 * step(2)
 *   '#'
 *   '##'
 * step(3)
 *   '#'
 *   '##'
 *   '###'
 *
 * */


/*
1) iterative solution ----

function pattern(n) {

    for(let row=0;row<n; row++){
        let step = '';
        for(let column = 0; column<n; column++){
            if(column<=row){
                step+= '#';
            }else{
                step += ' ';
            }
        }
        console.log(step);
    }
    
}*/


function recursPattern(n, row=0,step='') {

    if(n=== row){
        return;
    }
    if(n===step.length){
        console.log(step);
        return recursPattern(n,row +1)
    }

    if(step.length <= row){
        step += '#';
    }else {
        step += ' ';
    }

    recursPattern(n,row,step);
}


/**
 * Printing a Pyramids
 *
 * */


function pyramids(n) {
    const mid = Math.floor((2*n-1)/2);
    for(let row = 0; row < n; row++){
        let level = '';
        for(let col = 0; col<(2*n-1); col++){
            if(mid-row<= col && mid+row>=col){
                level += '#';
            }else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// recursive solution

function recursPyramid(n, row=0,level='') {
    if(row === n){
        return;
    }
    if(level.length === 2*n-1){
        console.log(level);
        return recursPyramid(n,row+1);
    }
    const mid = Math.floor((2*n-1)/2);
    let add;
    if(mid -row <= level.length && mid+row >= level.length){
        add ='#';
    }else{
        add =' ';
    }
    recursPyramid(n,row,level+add);
}