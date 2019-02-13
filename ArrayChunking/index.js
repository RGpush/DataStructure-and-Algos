/**
 * --Directions
 * Given an Array and Chunk size, divide the array into many sub arrays
 * where each sub array is of length size
 * example--
 * chunk([1,2,3,4],2) ===> [[1,2],[3,4]]
 * chunk([1,2,3,4,5,6,7],2) ===> [[1,2],[3,4],[5,6],[7]]
 * chunk([1,2,3,4,5,6,7,8],3) ===> [[1,2,3],[4,5,6],[7,8]]
 * chunk([1,2,3,4,5],4) ===> [[1,2,3,4],[5]]
 * chunk([1,2,3,4,5],10) ===> [[1,2,3,4,5]]
 *
 * */

/*
1) first approach
function chunk(array,size) {

    const chunked = [];

    for(let element of array){
        // now first we will get the last array element from chunked array
        const last = chunked[chunked.length-1];
        //first we will check if last array length is equal to the size means last is full,
        // we will create new array inside chunked array.
        if(!last || last.length === size){
            chunked.push([element]);
        }else {
            // Note: here chunked and last are const,
            // so if we push data into last it will push data into chunk also.
            last.push(element);
        }
    }
    return chunked;
}
*/


// slice(a,b) here notice that slice takes values from a to before the index b. Note: doesn't include b index also and return an array of these values.


function chunk(array,size) {
    const  chunked = [];
    let index = 0;

    while(index< array.length){
      chunked.push(array.slice(index,index+size));
        index += size;
    }

    return chunked;

}