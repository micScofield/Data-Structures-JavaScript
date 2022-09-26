// matrix 4
/*
[[1,2,3,4],
[12,13,14,5],
[11,16,15,6],
[10,9,8,7]]
*/

function spiral(n) {
    let results = []

    for (let i=0;i<n;i++) {
        results.push([])
    }

    let startColumn=0, endColumn=n-1, startRow=0, endRow=n-1

    let counter = 1
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i=startColumn; i<=endColumn; i++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++
        // console.log('A:', results)
        for (let i=startRow; i<=endRow; i++) {
            results[i][endColumn] = counter
            counter++
        }
        // console.log('B:', results)
        endColumn--
        for (let i=endColumn; i>=startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        // console.log('C:', results)
        endRow--
        for (let i=endRow; i>=startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        // console.log('D:', results)
        startColumn++
    }
    return results
}

console.log(spiral(3))