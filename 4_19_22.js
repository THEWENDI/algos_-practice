//1
function addTwoNums(num1, num2) {
    return num1 + num2;
}

let sum = addTwoNums(5, 10);
console.log("adding 5 and 10 :", sum);

let netSalesPrice = 100;
let tax = 10;
let totalPrice = addTwoNums(netSalesPrice, tax);

console.log(totalPrice);

//2
function combineStrings(str1, str2, str3) {
    return str3 + str1 + str2;
}

// Test the combineStrings function.
let test = combineStrings("a", "b", "c");
console.log(test, "should equal 'cab'");

//3
function combineSmallerStringFirst(str1, str2) {
    if (str1.length <= str2.length) {
        return str1 + str2;
    }
    else {
        return str2 + str1;
    }
}

test = combineSmallerStringFirst("gramming", "pro");
console.log(test, "should be 'programming'");

test = combineSmallerStringFirst("pro", "gramming");
console.log(test, "should be 'programming'");

test = combineSmallerStringFirst("abc", "def");
console.log(test, "should be 'abcdef'");

//4
/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str, repeatAmount) {
    let repeatedStr = "";
    for (let i = 0; i < repeatAmount; i++) {
        repeatedStr += str;
        repeatedStr += " ";
    }
    return repeatedStr;
}

console.log(stringRepeat("sup", 10));

/**5
 * Calculate the total miles that can be driven before running out of gas.
 * What information (parameters) would you need if to know if someone asked you
 * this question?
 * @returns {number} The miles until empty.
 */
function milesToEmpty(mpg, gallonintank) {
    return mpg * gallonintank
}
console.log(milesToEmpty(30, 17))

/**6
 * Determines the total of the lengths of the words in the given array.
 * @returns {number} The total length of all the words.
 */
function totalWordsLength(array) {
    let totalworlds = 0;
    for (let i = 0; i < array.length; i++) {
        totalworlds += array[i].length;
    }
    return totalworlds;
}

console.log(totalWordsLength(["works", "work", "work"]));

/**7
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(array) {
    let totalworlds = 0;
    for (let i = 0; i < array.length; i++) {
        totalworlds += array[i].length;
    }
    return totalworlds / array.length
}
console.log(avgWordLength(["work", "work", "work"]));

function avgWordLength2(array) {
    return array.join("").length / array.length;
}

console.log("2 :", avgWordLength2(["work", "work", "work"]));



/**8
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(array) {
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest
}

console.log(findLongestWord(["works", "workss", "worksss"]));

/**9
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(inclusiveRangeSum(1, 10));