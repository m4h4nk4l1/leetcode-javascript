/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(num1, m, num2, n) {
    let j=0
         for(let i=m;i<m+n;i++){
                 num1[i]=num2[j]
                 j++
         }
console.log(num1.sort((a,b)=>a-b))
};



//updated less time complexity and less execution time


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
        nums1.slice(0, m).concat(nums2).sort((a, b) => a - b).map((val, i) => nums1[i] = val);
    };
    