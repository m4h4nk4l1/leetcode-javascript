// approach used here:

// https://leetcode.com/problems/move-zeroes/solutions/2685367/js-es6-two-pointers-93-with-explanation/?languageTags=javascript

// Two pointers is the use of two different pointers (usually to keep track of array or string indexes) to solve a problem with specified indexes in order to save time and space.

// To solve this problem, we create two pointers low = 0, and high = low + 1. Now while high < array length - 1, we keep iterating. If the symbol under the low index = 0, we stop the low and move only the high until it hits a number not equal to 0 (!==0). As soon as the high finds a non-zero, we swap low and high (that is, swap a number with zero), and only then start moving the low again.

let moveZeroes = function (nums) {
    let low = 0;
    let high = low + 1;

    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++;
        }
    }
};