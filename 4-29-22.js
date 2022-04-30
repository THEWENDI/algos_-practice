
function isValidSubsequence(array, sequence) {
    let arri = 0;
    let seqi = 0;
    while (arri < array.length && seqi < sequence.length) {
        if (array[arri] === sequence[seqi]) {
            seqi++;
        }
        arri++;
    }
    return seqi === sequence.length;
}

// function isValidSubsequence2(array, sequence) {
//     let seqi = 0;
//     for (const elemnt of array) {
//         if (seqi === sequence.length) {
//             break;
//         }
//         if (elemnt === sequence[seqi]) {
//             seqi++;
//         }
//     }
//     return seqi === sequence.length
// }


// const array = [5, 1, 22, 25, 6, -1, 8, 10]
// const sequence = [1, 6, -1, 10]

// console.log(isValidSubsequence(array, sequence));


function sortedSquaredArray(array) {
    let sarray = [];
    let startidx = 0;
    let endidx = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        let startvalue = array[startidx];
        let endvalue = array[endidx];
        if (Math.abs(startvalue) > Math.abs(endvalue)) {
            sarray[i] = startvalue * startvalue;
            startidx++;
        } else {
            if (Math.abs(endvalue) >= Math.abs(startvalue)) {
                sarray[i] = endvalue * endvalue;
                endidx--;
            }
        }
    }
    return sarray;
}
