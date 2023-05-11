// Intuition
// Sort the array of string alphabetically and compare the first and last words.
// All words inbetween will have matching prefixes given the words are sorted alphabetically

// Code
function longestCommonPrefix(strs: string[]): string {
    let sorted = strs.sort((a,b) => a < b? -1:1)

    let output = []
    let firstword = sorted[0]
    let lastword = sorted[sorted.length -1]
    for (var i = 0; i < firstword.length; i++) {
        if (firstword[i] ==lastword[i] ){
            output.push(firstword[i])
        }else{       
            break
        }
   }


    return output.join("")
};