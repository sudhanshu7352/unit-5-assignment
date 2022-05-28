// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
// Sample Input 1

// 10
// 3 4 21 36 10 28 35 5 24 42
// Sample Output 1

// 4 0

function breakingRecords(scores) {
    // Write your code here
    let min=999999999
    let max= -9999999999
    let min_count=0
    let max_count =0
    
    for(let i=0;i<scores.length;i++){
        if(scores[i]>max){
            max =scores[i]
            max_count++
        }
        if(scores[i]<min){
            min=scores[i]
            min_count++
        }
    }
    let ans =[max_count-1,min_count-1]
    return ans
}
