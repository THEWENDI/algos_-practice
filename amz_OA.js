//////Two Sum - Unique Pairs///////
///////////////////////////////////

Write a function that takes a list of numbers and a target number, and then returns the number of unique pairs that add up to the target number.

[X, Y] and [Y, X] are considered the same pair, and not unique.

Examples
Example 1:
Input: [1, 1, 2, 45, 46, 46], target = 47
Output: 2
Explanation:
1 + 46 = 47

2 + 45 = 47

Example 2:
Input: [1, 1], target = 2
Output: 1
Explanation:
1 + 1 = 2

Example 3:
Input: [1, 5, 1, 5], target = 6
Output: 1
Explanation:
[1, 5] and [5, 1] are considered the same, therefore there is only one unique pair that adds up to 6.

const array = [1, 1, 2, 45, 46, 46];
const targetSum = 47;

function twoNumberSum(array, targetSum) {
    const seen = new Set();
    const complement = new Set();
    let ans = 0;
    for (const num of array) {
        let targetnum = targetSum - num;
        if (complement.has(targetnum) && !seen.has(num)) {
            // (num, targetnum) is a pair that sums to the target
            ans++
            // mark num and targetnum as seen so that when we see (target - num, num) it won't be counted again
            seen.add(num);
            seen.add(targetnum);
        }
        seen.
            complement.add(num);
    }

    return ans;
}
// Time: O(n), Space: O (n)
console.log(twoNumberSum(array, targetSum))


//////////Pairs of Songs With Total Durations Divisible by 60/////////
/////////////////////////////////////////////////////////////////////


// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

//Approach 1: Brute Force

var numPairsDivisibleBy60 = function (time) {
    let counts = 0;
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                counts++
            }
        }
    }
    return counts;
};
// Time complexity: O(n^2)
// Space complexity: O(1)

//Approach 2:Hashmap

var numPairsDivisibleBy60 = function (time) {

    var mod_60 = (x => x % 60);

    // key: remainder of mod 60
    // value: occurrence of remainder
    let congurenceDict = {}

    // counter of ( song i + song j ) % 60 == 0 
    let pairCount = 0


    for (const remainder of time.map(mod_60)) {

        complement = mod_60(60 - remainder);

        // update pair count with complement
        pairCount += congurenceDict[complement] || 0;

        // update occurrence of current remainder
        congurenceDict[remainder] = (congurenceDict[remainder] || 0) + 1;

    }

    return pairCount;
};
// Time complexity: O(n)
// Space complexity: O(n)

///////// Merge Two Sorted Lists /////////////
//////////////////////////////////////////////

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) {
        return list2
    }
    else if (list2 === null) {
        return list1
    }
    else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
//Time complexity : O(n + m)
//Space complexity : O(n + m)

// Approach 2: Iteration

var mergeTwoLists = function (list1, list2) {
    // maintain an unchanging reference to node ahead of the return node.
    let prehead = new ListNode;
    let prev = prehead;

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    // At least one of l1 and l2 can still have nodes at this point, so connect
    // the non-null list to the end of the merged list.
    prev.next = list1 === null ? list2 : list1;
    return prehead.next;
};

// Time complexity : O(n + m)
// Space complexity : O(1)


//////////// Fill The Truck///////////
/////////////////////////////////////

// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.


// Example 1:

const boxTypes = [[1, 3], [2, 2], [3, 1]]
const truckSize = 4

// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

function maximumUnits(boxTypes, truckSize) {

    var unitCount = 0;
    var remainingTruckSize = truckSize;
    while (remainingTruckSize > 0) {
        var maxUnitBoxIndex = findMaxUnitBox(boxTypes);
        // check if all boxes are used
        if (maxUnitBoxIndex == -1) {
            break;
        }
        // find the box count that can be put in truck
        var boxCount = Math.min(remainingTruckSize, boxTypes[maxUnitBoxIndex][0]);
        unitCount += boxCount * boxTypes[maxUnitBoxIndex][1];
        remainingTruckSize -= boxCount;
        // mark box with index maxUnitBoxIndex as used
        boxTypes[maxUnitBoxIndex][1] = -1;
    }
    return unitCount;

    function findMaxUnitBox(boxTypes) {
        var maxUnitBoxIndex = -1;
        var maxUnits = 0;
        for (i = 0; i < boxTypes.length; i++) {
            if (boxTypes[i][1] > maxUnits) {
                maxUnits = boxTypes[i][1];
                maxUnitBoxIndex = i;
            }
        }
        return maxUnitBoxIndex;
    }

};

console.log(maximumUnits(boxTypes, truckSize));
// Time complexity : O(n^2)
// Space complexity : O(1)


//////////Slowest Key////////////
/////////////////////////////////


// A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

// You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

// The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

// Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.

// Return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.

// Example 1:

const releaseTimes = [9, 29, 49, 50];
const keysPressed = "cbcd";

// Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
// Output: "c"
// Explanation: The keypresses were as follows:
// Keypress for 'c' had a duration of 9 (pressed at time 0 and released at time 9).
// Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
// Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
// Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
// The longest of these was the keypress for 'b' and the second keypress for 'c', both with duration 20.
// 'c' is lexicographically larger than 'b', so the answer is 'c'.

function slowestKey(releaseTimes, keysPressed) {
    let maxLength = 0, longestIndex = -1;

    for (let i in releaseTimes) {
        let timePressed = releaseTimes[i] - (releaseTimes[i - 1] || 0);

        // if longer press found than current max, update maxLength and index of longest pressed key
        if (timePressed > maxLength) {
            maxLength = timePressed;
            longestIndex = i;
        }
        // if current timePressed is same as max, update longestIndex if current is lexicographically larger
        else if (timePressed === maxLength) {
            longestIndex = keysPressed[i] > keysPressed[longestIndex] ? i : longestIndex;
        }
    }

    return keysPressed[longestIndex];
};

console.log(slowestKey(releaseTimes, keysPressed));
// Time complexity : O(n)
// Space complexity : O(n) || O(k)


///////Top K Frequent Words////////
///////////////////////////////////


// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

//The idea
// 1.Build a hash and count the frequency
// 2.Sort the hash using frequency or compare strings
// 3.Return the top k results
var topKFrequent = function (words, k) {
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word] + 1 || 1;
        console.log(hash[word]);
    }
    let result = Object.keys(hash).sort((a, b) => {
        let countCompare = hash[b] - hash[a];
        if (countCompare == 0) return a.localeCompare(b);
        else return countCompare;
    }
    );
    return result.slice(0, k);

};
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)


///////Maximum Average Pass Ratio//////
//////////////////////////////////////

// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

// You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

// The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

// Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: classes = [[1,2],[3,5],[2,2]], extraStudents = 2
// Output: 0.78333
// Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333.

var maxAverageRatio = function (classes, extraStudents) {
    // the heap will automatically find the class that will benefit
    // the most by adding a passing student
    const heap = new MaxHeap();

    // push all the classes into the heap so that
    // the heap can find the class that will benefit the most
    for (const x of classes) {
        heap.push(x);
    }

    // while there are extra students
    while (extraStudents) {

        // add the extra student to the class that will benefit the most
        heap.peak()[0] += 1;
        heap.peak()[1] += 1;

        // heapify down so that the heap remains valid
        heap.heapifyDown(0);

        extraStudents--;
    }


    // calculate the new average of all the classes
    let total = 0;
    for (const [x, y] of heap.store) {
        total += (x / y);
    }
    return total / heap.store.length;
};


class MaxHeap {
    constructor() {
        this.store = [];
    }

    peak() {
        return this.store[0];
    }

    size() {
        return this.store.length;
    }

    pop() {
        if (this.store.length < 2) {
            return this.store.pop();
        }
        const result = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return result;
    }

    push(val) {
        this.store.push(val);
        this.heapifyUp(this.store.length - 1);
    }

    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                child = parent;
            } else {
                return child;
            }
        }
    }

    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1, 2].map((x) => parent * 2 + x).filter((x) => x < this.size());
            if (this.shouldSwap(child2, child)) {
                child = child2
            }
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                parent = child;
            } else {
                return parent;
            }
        }
    }

    shouldSwap(child, parent) {
        if (!child) return false;
        const c = (this.store[child][0] + 1) / (this.store[child][1] + 1) - (this.store[child][0]) / (this.store[child][1]);
        const p = (this.store[parent][0] + 1) / (this.store[parent][1] + 1) - (this.store[parent][0]) / (this.store[parent][1]);
        return c > p;
    }
};

// Time Complexity: O(M log N)
// Space Complexity: O(N)


//////////Combination Sum//////////
//////////////////////////////////

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    // No candidates, means no results
    if (!candidates) {
        return [];
    }

    // Empty set is the only solution for target 0
    if (target === 0) {
        return [[]];
    }

    // Sort the candidates array as otherwise we could 
    // come up with solution [3,2,2] instead of [2,2,3]
    candidates.sort((a, b) => { return a - b });

    // Store all possible combinations in here
    let paths = [];

    // The recursive part. 
    // t is what we're looking for. This will become smaller, deeper in to the recursive calls
    // p is where we will record our current path
    // i is the index of the numbers we're considering. Once we get stuck with the 2's
    // we will increase i to try other combinations

    let find = function (t, p, i) {

        // check std out to  get a feel for the order in which we encounter 2,3,6,7
        console.log('considering:', t, p, i);

        if (t === 0) {
            // we found a valid path, so store that in the paths.
            paths.push(p);
            return;
        } else if (t < 0) {
            console.log('Dead path. Will our code actually ever get here?');
            return;
        } else {
            // don't run over the candidates array length 
            // && don't try candidates that would bring target below 0
            while (i < candidates.length && t - candidates[i] >= 0) {


                // "Use" candidate[i]: Lower our target, and record the candidate in the path
                // We're cloning the path array, or it will contaminate future paths.
                find(t - candidates[i], [...p, candidates[i]], i)

                // "Lose" candidate[i]:
                // In our main example, we don't hit this path until the path of pure 2's
                // has been tried and found to lead to [2,2,2] with no candidates worth pursuing                 // further, because of the 2nd check of the while loop condition.
                i++;
                console.log("i", i)
            }

        }

    }

    // kick off initial case, we're looking for the original target, 
    // our current path is empty, and we'll consider all candidates 
    find(target, [], 0);

    return paths;
};
// Time Complexity: O(N^(T/M)+1)    \mathcal{O}(N^{\frac{T}{M}+1}
// Space Complexity: O(T/M)


/////////Reorder Data in Log Files///////////
////////////////////////////////////////////

// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

// Example 1:

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".

var reorderLogFiles = function (logs) {
    const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
    const isNum = c => /\d/.test(c);

    // if body same then compare identifier
    const compare = (a, b) => {
        const n = body(a).localeCompare(body(b));
        if (n !== 0) return n;
        return a.localeCompare(b);
    };

    const digitLogs = [];
    const letterLogs = [];
    for (const log of logs) {
        if (isNum(body(log))) digitLogs.push(log);
        else letterLogs.push(log);
    }
    return [...letterLogs.sort(compare), ...digitLogs];

};

// Time Complexity: O(M.N.log N)
// Space Complexity: O(M.log N)


///////Robot Bounded In Circle//////
///////////////////////////////////

// On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

// The north direction is the positive direction of the y-axis.
// The south direction is the negative direction of the y-axis.
// The east direction is the positive direction of the x-axis.
// The west direction is the negative direction of the x-axis.
// The robot can receive one of three instructions:

// "G": go straight 1 unit.
// "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
// "R": turn 90 degrees to the right (i.e., clockwise direction).
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
// "G": move one step. Position: (0, 1). Direction: South.
// "G": move one step. Position: (0, 0). Direction: South.
// Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
// Based on that, we return true.

// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
// Based on that, we return false.

var isRobotBounded = function (instructions) {
    // north = 0, east = 1, south = 2, west = 3
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    // Initial position is in the center
    let x = 0, y = 0;
    // facing north
    let idx = 0;
    let movements = [...instructions];

    for (let move of movements) {
        if (move == 'L')
            idx = (idx + 3) % 4;
        else if (move == 'R')
            idx = (idx + 1) % 4;
        else {
            x += directions[idx][0];
            y += directions[idx][1];
        }
    }

    // after one cycle:
    // robot returns into initial position
    // or robot doesn't face north
    return (x == 0 && y == 0) || (idx != 0);
};

// Time Complexity: O(N)
// Space Complexity: O(1)
