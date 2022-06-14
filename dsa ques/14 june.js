//repeated strings

function repeatedString(s, n) {
    // Write your code here
 let count =0
  for(let i=0;i<s.length;i++){
      if(s[i]=="a"){
          count++
      }
  }
  let repeat =Math.floor(n/s.length)
  let rem =n%s.length
  let ans= repeat*count
   for(let i=0;i<rem;i++){
       if(s[i]=="a"){
           ans++
       }
   }
   return ans
}
