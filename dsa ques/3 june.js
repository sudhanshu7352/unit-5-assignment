//the hurdle race
// Sample Input 0

// 5 4
// 1 6 3 5 2
// Sample Output 0

// 2

function hurdleRace(k, height) {
    // Write your code here
  let max = -999
  
  for(let i=0;i<height.length;i++){
      if(height[i] >max){
          max=height[i]
      }
      
  }
  if(max>k){
      return max-k
  }else{
      return 0
  }
}
