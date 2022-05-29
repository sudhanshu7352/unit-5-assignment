//Given an array of integers and a positive integer k, determine the number of (i,j)  pairs where i<j and ar[i] +ar[j]  is divisible by 

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count =0
    
    for(let i=0;i<n;i++){
        
        for(let j=i;j<n;j++){
            if(i<j && (ar[i]+ar[j]) % k==0 ){
                //console.log(ar[i]+ar[j])
                count++
            }
        }
    }
    return count
    
}
//migratory birds
// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
function migratoryBirds(arr) {
    // Write your code here
  let obj ={}
  
  for(let i=0;i<arr.length;i++){
      if(obj[arr[i]]==undefined){
          obj[arr[i]] =1
      }else{
          obj[arr[i]]=obj[arr[i]]+1
      }
  }
  let max =-99999
  let maxkey
  for(let x in obj){
      if(obj[x]>max){
          max=obj[x]
          maxkey =x
      }
  }
    // for (key in counts) {
    //   if (counts[key] > max) {
    //     max = counts[key];
    //     maxKey = key;
    //   }
    // }
  return maxkey
 // console.log(max)
}
