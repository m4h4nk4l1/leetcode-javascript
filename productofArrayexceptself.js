// Intuition
// Approach
// Create a result array with the same length as the input array, initializing all elements to 1.
// Iterate through the input array from the beginning, calculating the product of all elements before the current index. Multiply the corresponding element in the result array by this product.
// Iterate through the input array from the end, calculating the product of all elements after the current index. Multiply the corresponding element in the result array by this product.
// Return the result array.
// The given solution works for arrays containing zeros. There is no need to change the approach for such cases.

// Complexity
// Time complexity:
// O(n)

// Space complexity:
// O(1)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);
  
    // Calculate the product of elements before the current index
    let productBefore = 1;
    for (let i = 0; i < length; i++) {
      result[i] *= productBefore;
      productBefore *= nums[i];
    }
  
    // Calculate the product of elements after the current index
    let productAfter = 1;
    for (let i = length - 1; i >= 0; i--) {
      result[i] *= productAfter;
      productAfter *= nums[i];
    }
  
    return result;
  };