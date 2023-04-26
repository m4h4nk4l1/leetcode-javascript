var merge = function(intervals) {
    let length = intervals.length;
    intervals.sort((a,b) => a[0] - b[0]);
    for(let index = 1; index < length; index++) {
        if(intervals[index][0] <= intervals[index-1][1]) {  // if overlapping found
            if(intervals[index][1] >= intervals[index-1][1]) {
                intervals.splice(index-1, 2, [intervals[index-1][0],intervals[index][1]]);
            }
            else {
                intervals.splice(index,1);
            }
			index--;      
            length--;
        }
    }
    return intervals;
};