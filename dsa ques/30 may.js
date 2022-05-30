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
//longest subarray

function longestSubarray(arr) {
    // Write your code here
     if (arr.length < 2)
    return arr.length;
    
  let best = 1;
  let bestLower = 1;
  let bestHigher = 1;
  
  for (let i=1; i<arr.length; i++){
    if (arr[i] == arr[i-1]){
      bestLower = bestLower + 1;
      bestHigher = bestHigher + 1;
    
    } else if (arr[i] - 1 == arr[i-1]){
      bestLower = 1 + bestHigher;
      bestHigher = 1;
    
    } else if (arr[i] + 1 == arr[i-1]){
      bestHigher = 1 + bestLower;
      bestLower = 1;
    
    } else {
      bestLower = 1;
      bestHigher = 1;
    }

    best = Math.max(best, bestLower, bestHigher);
  }
  
  return best;
//   for(let i=0;i<arr.length;i++){
      
//   }
}

//usernames changes
function possibleChanges(usernames) {
    // Write your code here
    let ans = []
    for (let i = 0; i < usernames.length; i++) {
        let temp = usernames[i]
        let flag = 0
        for (let j = 0;j< temp.length; j++) {
            if ((temp[j] ) > (temp[j + 1] )) {
                ans.push("YES")
                flag = 1
                break
            }
        }
        if(flag==0){
            ans.push("NO")
        } 
    }
  //  console.log(ans)
    return ans
}