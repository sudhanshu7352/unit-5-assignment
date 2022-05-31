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
