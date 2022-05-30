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
