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
//A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page   1 is always on the right side:

// image

// When they flip page 1, they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page .

function pageCount(n, p) {
    // Write your code here
     let s =0
     let e=0
     let page =1
     
     while(page<p){
         s++
         page+=2
     }
     if(n%2 !==0){
         page =n-1
     }else{
         page=n
     }
     while(page>p){
         e++
         page-=2
     }
     if(s>e){
        // console.log(e)
         return e
     }else{
        // console.log(s)
         return s
     }
    
}

// 1 june
//counting valleys
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

function countingValleys(steps, path) {
    // Write your code here
    let below_sea =false
    let valleys =0
    let level =0
    for(let i=0;i<steps;i++){
        if(path[i] == 'D'){
            level-- 
        }
        if(path[i] =='U'){
            level++
        }
        if(level<0){
            below_sea =true
        }
        if(below_sea && level==0){
            valleys++
            below_sea =false
        }
    }
    return valleys
}
//elctronics shop
//A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    
    let ans=0
    // let k =0
    // let d=0
   for(let i=0;i<keyboards.length;i++){
       for(let j=0;j<drives.length;j++){
           if((keyboards[i]+drives[j])>ans && b >=(keyboards[i]+drives[j])){ans =(keyboards[i]+drives[j])
           }
       }
   }
    if(ans==0){
        return -1
    }else{
        return ans
    }
}