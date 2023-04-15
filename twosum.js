// pseudo code:

//     targetnumber and array of nums will be given 
//     return indices of the two numbers such that they add up to target.

//     You may assume that each input would have exactly one solution, and you may not use the same element twice.





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

   for (let i = 0; i < nums.length; i++) {
   	const diff = target - nums[i]
   
   	if (diff in mp) return [i, mp[diff]]

   	mp[nums[i]] = i
   }
};