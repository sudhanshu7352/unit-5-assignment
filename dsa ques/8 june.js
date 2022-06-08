//arrow functions
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    
    
    let newArray =nums.map((e)=>e%2==0?e*2:e*3)
    return newArray
}
//find digits
function findDigits(n) {
    // Write your code here
  let str = n.toString()
 // console.log(str)
  let count=0
  for(let i=0;i<str.length;i++){
      if(n%str[i]==0){
          count++
      }
  }
  return count
}
//Extra long factorial
function extraLongFactorials(n) {
    // Write your code here
    n =BigInt(n)
    
    let sum=BigInt(1)
  while(n>0){
     sum =sum*n
     n-- 
  }
  console.log(sum.toString())
 // return sum
 }
