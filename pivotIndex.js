
// Binary Search I
// 441
// Sep 24, 2022
// The Brute Force Way
// The brute force way to do this problem is to go to every index, then do the sum of all the numbers to the left and the right of an index. However, this will become a O(n^2) time and O(1) space solution. Definitely not optimal.

// Optimal Way (as seen below)
// We want to find the index where the left of a index equals to the right of the index. If we know the summation of the entire nums array, then we only need to know what number we are currently on, and the summation of the numbers we have past.

// We know if we are at index of 0, the values to the right of index 0 is totalOfNums - nums[0]. This is the first ah-ha moment. The next is when we realize if we keep a running sum of the numbers we have passed, such as when we get to index 1, we can accurately keep track of the numbers on the left and right of an index without doing a loop over them each time.

// Please follow my commented code below.

const pivotIndex = (nums) => {
	// We have not started our program yet, so values are at 0
    let rightSum = 0;
    let leftSum = 0;

	// Calculate the sum of the entire array
    // O(n)
    nums.forEach((v) => (rightSum += v));

    // O(n)
    for (var i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i];
		
		// The right sum no longer contains the curr number
        rightSum -= curr;
		
		// if left sum equals right sum, we return index
        if (leftSum === rightSum) return i;
		
		// We did not find a match
		// Left sum now contains our curr number
        leftSum += curr;
    }

    return -1;
};