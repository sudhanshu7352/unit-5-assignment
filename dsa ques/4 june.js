//climbing the leaderboard

//Sample Input 1

// 7
// 100 100 50 40 40 20 10
// 4
// 5 25 50 120
// Sample Output 1

// 6
// 4
// 2
// 1


function climbingLeaderboard(ranked, player) {
    // Write your code here
   let result = [];
  let uniqueScores = [...new Set(ranked)];
for (const score of player) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankBinarySearch(score, uniqueScores));
    }
  }
  return result;
}
function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
while (true) {
    let mid = Math.floor((start + end) / 2);
// base cases
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }
// recursion
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

}
//beautiful days of movies
//Sample Input

// 20 23 6
// Sample Output

// 2
function beautifulDays(i, j, k) {
    // Write your code here
    let count= 0
  for(let a=i;a<=j;a++){
      let b=a.toString().split("").reverse().join("")
      let ans =Math.abs((a-b)/k)
      if(Number.isInteger(ans)){
          count++
      }
  }
  return count
}
// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     return n*factorial(n-1)
// }
function vowelsAndConsonants(s) {
    
    for(let i=0;i<s.length;i++){
        if(s[i] =='a'|| s[i] =='e'||s[i] =='i'||s[i] =='o'||s[i] =='u'){
            console.log(s[i])
        }
    }
    for(let i=0;i<s.length;i++){
        if(s[i] !=='a' && s[i] !=='e' && s[i] !=='i' && s[i] !=='o' && s[i] !=='u'){
            console.log(s[i])
        }
    }
}
function getSecondLargest(nums) {
    // Complete the function
    let temp=nums.sort((a,b)=>a-b)
    let x= temp[temp.length-1]
   // console.log(temp)
    for(let i=temp.length-1;i>=0;i--){
      //  console.log(temp[i])
        if(temp[i]<x){
            return (temp[i])
            break
        }
    }
}