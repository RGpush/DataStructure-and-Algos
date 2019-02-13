/***
 * Implement BubbleSort,SelectionSort,MergeSort
 */



// swap with adjacent element itratively until we find exact sequence
function bubbleSort(arr) {
    for(let i=0; i< arr.length; i++){
        for(let j=0; j<(arr.length -i-1);j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}



//select an element on particular index compare it with other element it found lesser than swap it with that selectedIndex
function selectionSort(arr) {
    for(let i=0; i< arr.length; i++){

        let indexOfMin = i;

        for(let j=i; j<arr.length;j++){
            if(arr[j]<arr[indexOfMin]){
               indexOfMin = j;
            }
        }

        if(indexOfMin !== i){
            const temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {

    if( arr.length === 1){
        return arr;
    }

    const centre = Math.floor(arr.length/2);
    const left = arr.slice(0,centre);
    const right = arr.slice(centre);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(leftArr,rightArr) {

    const result = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            result.push(leftArr.shift());
        }else {
            result.push(rightArr.shift());
        }
    }

    return [...result,...leftArr,...rightArr];
}