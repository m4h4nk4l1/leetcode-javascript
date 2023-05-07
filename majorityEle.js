
// Approach
// we are using object method, and making all the value of array in key value pair

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n= nums.length/2;
let obj={};
for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]==undefined){
        obj[nums[i]]=1;
    }else{
        obj[nums[i]]++
    }
}
for(let i in obj){
    if(obj[i]>n){
        return i
    }
}
};