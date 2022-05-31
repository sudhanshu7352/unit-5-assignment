//between two sets
//There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

function getTotalX(a, b) {
    // Write your code here
    const factor =(x,y)=>x%y===0
    //  a =a.map(Number)
    //  console.log(a)
    let ans =[]
  for(let i=a[a.length-1];i<=b[0];i++){
      
      if(a.every((x)=>factor(i,x)) && b.every((x)=> factor(x,i)) ){
          ans.push(i)
      }
      
  }
  return ans.length
}
//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
function sockMerchant(n, ar) {
    // Write your code here
  let obj={}
  for(let i=0;i<n;i++){
      if(obj[ar[i]] ==undefined){
          obj[ar[i]]=1
      }else{
          obj[ar[i]] =obj[ar[i]]+1
      }
  }
  //console.log(obj)
  let count =0
  for(let x in obj){
      if(obj[x]>1){
      if(obj[x]%2 ==0){
          count +=obj[x]/2
      }else{
          count +=(obj[x]-1)/2
      }
      }
  }
  return count
}
