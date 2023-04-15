# sorting algorithsm:
### level-1:[simple ones]
bubble sort 
insertion sort
selection sort
### level-2[efficient ones]
merge sort
quick sort
heap sort

so basically you have to decide sorting algos on the following conditions

Size of data
Randomness of the data
Time and Space complexity
stability : to retain the relative order of the equal elements present in the input data (look for stale algorithms)


# level-1:[simple ones]

## bubblesort:

it picks a pair of elements and compares them and swaps the element out of order 
O(n^2) -> time complexity
only for very small data
actually not used in real world scenarios

   ### implementation:
```javascript
    for(let i =0; i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++ ){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // Swap using destructuring
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
```

## insertionsort:

its starts with a sorted list of one element in left and unsorted list of n-1 elements in right and it picks element by element in 
unsorted list and inserts them in the sorted list at the coreect position
O(n^2) and O(n)

performs very well on the partially sorted data and small data

stability algorithm

   ### implementation:
```javascript
      for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      // Swap arr[j] and arr[j-1]
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
```