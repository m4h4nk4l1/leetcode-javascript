// you have to find minimum of the array and maximum of the array

// to do that this is the logic that i want to incorporate

// 1st approach is

// traverse the given array

// compare each of the element with first element with the next adjacent element 

arr = [1, 2, 5, 9, 12, 44];

initial = arr[0]
final = arr[0]

for (let index = 1; index < arr.length; index++) {
    if (arr[i] < initial) {
        // replace initial with arr[i]
        initial = arr[i]; 
    }
    if(arr[i] > final){
        //replace final with arr[i]
        final = arr[i];
    }
}

console.log(initial);
console.log(final);

// with this you can get O(n) but still we can further optimize the code by
//  comparing it with pairs of two even tho it still remains O(n) time complexity

for (let i = 0; i < arr.length; i += 2) {
    // Check if there are at least two elements remaining
    if (i + 1 < arr.length) {
      // Compare the pair of elements
      if (arr[i] < arr[i + 1]) {
        // If the first element is smaller, update minVal
        if (arr[i] < minVal) {
          minVal = arr[i];
        }
        // If the second element is larger, update maxVal
        if (arr[i + 1] > maxVal) {
          maxVal = arr[i + 1];
        }
      } else {
        // If the second element is smaller, update minVal
        if (arr[i + 1] < minVal) {
          minVal = arr[i + 1];
        }
        // If the first element is larger, update maxVal
        if (arr[i] > maxVal) {
          maxVal = arr[i];
        }
      }
    } else {
      // If there is only one element remaining, update minVal and maxVal
      if (arr[i] < minVal) {
        minVal = arr[i];
      }
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
  }