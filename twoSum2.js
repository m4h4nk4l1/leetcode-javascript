// Intuition
// We want to find two numbers in the input array that add up to the target value. We can use a two-pointer approach to iteratively narrow down the search range until we find a pair that adds up to the target.

// Approach
// Initialize two pointers 'p1' and 'p2' to point to the start and end of the input array, respectively.
// While 'p1' is less than 'p2', calculate the sum of the two numbers at 'p1' and 'p2'.
// If the sum is equal to the target, return the indices of the two numbers as an array.
// If the sum is greater than the target, decrement 'p2' to consider a smaller number at the end of the array.
// If the sum is less than the target, increment 'p1' to consider a larger number at the start of the array.
// If no two numbers are found that add up to the target, return an empty array.
// Complexity
// Time complexity: O(N), where N is the length of the input array 'numbers'. The algorithm iterates at most N times through the while loop.
// Space complexity: O(1), since the algorithm uses only a constant amount of extra space for the two pointers 'p1' and 'p2'.


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;

    while (p1 < p2) {
        let sum = numbers[p1] + numbers[p2];
        if (sum === target) {
            return [p1 + 1, p2 + 1];
        } else if (sum > target) {
            p2--;
        } else {
            p1++;
        }
    }
};