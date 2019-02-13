/**
 * --Diretions
 *  Write a function that accepts an integer N,
 *  and returns a NxN spiral matrix.
 *  ---Example
 *  matri(2)
 *  [[1,2],
 *  [4,3]]
 *  matrix(4)
 *  [[1, 2, 3, 4],
 *  [12, 13, 14, 5],
 *  [11, 16, 15, 6],
 *  [10, 9, 8, 7]]
 * */


function matrix(n){
    const results = [];

    for(let i=0;i<n; i++){
        results.push([]);
    }
    let count = 1;
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;
    while (startCol <= endCol && startRow <= endRow){
        //Top row
        for(let i=startCol; i<= endCol; i++){
            results[startRow][i]=count;
            count++;
        }
        startRow++;

        //Right column
        for(let i = startRow; i <= endRow; i++){
            results[i][endCol]=count;
            count++;
        }
        endCol--;

        //Bottom Row
        for(let i=endCol; i>= startCol; i--){
            results[endRow][i]=count;
            count++;
        }
        endRow--;

        // start column
        for(let i=endRow; i>= startRow; i--){
            results[i][startCol]=count;
            count++;
        }
        startCol++;
    }
    return results;
}




