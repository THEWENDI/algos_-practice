// function twoNumberSum(array, targetSum) {
//     for (i = 0; i < array.length - 1; i++) {
//         let firstnum = array[i];
//         for (j = i + 1; j < array.length; j++) {
//             let secondnum = array[j];
//             if (firstnum + secondnum === targetSum) {
//                 return [firstnum, secondnum];
//             }
//         }
//     }
//     return [];
// }
// let array = [4, 6, 1];
// let targetSum = 5;

// console.log(twoNumberSum(array, targetSum))

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//     console.log(element);
// }

function twoNumberSum(array, target) {

    const nums = []; // empty array

    for (const num of array) {
        const potentialMatch = target - num;
        console.log('potential', potentialMatch);
        if (nums.includes(potentialMatch)) {
            return ['ansewr', potentialMatch, num] // two numbers found
        } else {
            nums.push(num); // push number to nums array
            console.log(nums);
        }
    }
}

console.log(twoNumberSum([1, 4, 9, 16], 13))



function twoNumberSum(array, target) {

    const nums = {}; // empty object

    for (const num of array) {
        const potentialMatch = target - num;
        console.log('potential', potentialMatch);
        if (potentialMatch in nums) {
            return ['ansewr', potentialMatch, num] // two numbers found
        } else {
            nums[num] = true; // push number to nums array
            console.log(nums);
        }
    }
    return [];
}

console.log(twoNumberSum([1, 4, 9, 16], 13))
