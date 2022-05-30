// Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

// dayOfProgrammer has the following parameter(s):

// year: an integer
// Sample Input 0

// 2017
// Sample Output 0

// 13.09.2017
function dayOfProgrammer(year) {
    // Write your code here
   let leap =0
   if(year <1918){
       if(year%4 ==0){
           leap=-1
       }
       return (13 +leap +".09." +year)
   }
   else if(year >1918){
       if(year %400 ==0 ||(year %4==0 &&year %100 !==0) ){
           leap=-1
       }
       return (13 +leap +".09." +year)
   }else{
       return "26.09.1918"
   }
}
/////////bill division 
// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// Sample Input 0

// 4 1
// 3 10 2 9
// 12
// Sample Output 0

// 5
function bonAppetit(bill, k, b) {
    // Write your code here
  let sum =0
  
  for(let i=0;i<bill.length;i++){
      if(i==k){
          continue
      }else{
          sum +=bill[i]
      }
  }
  let ans 
  if(sum/2 ==b){
      ans ="Bon Appetit"
  }else{
     ans =b- sum/2
  }
 console.log(ans)
  // return ans
}
