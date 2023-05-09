/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var result = new Array(nums.length);
    var left = 0, right = nums.length - 1, pointer = right;

    while (left <= right) {
        const tempLeft = nums[left] ** 2;
        const tempRight =  nums[right] ** 2;

        if (tempLeft < tempRight) {
            result[pointer] = tempRight;
            right--;
        } else {
            result[pointer] = tempLeft;
            left++;
        }

        pointer--;

    }

    return result;
};