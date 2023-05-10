
// Solution 1 : Using Array splice method
const removeDuplicates = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
};

// Solution 2 : For loop with continue
const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === nums[i]) continue; // If the elements are equal then continue else copy the unique element by then to "i+1" position
        nums[++i] = nums[j];
    }
    return i + 1;
}

// Solution 3 : For loop 
const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { //  If the elements are not equal then copy the unique element by then to "i+1" position
            nums[++i] = nums[j];
        }
    }
    return i + 1;
}

// Solution 4 :  While loop
const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
}