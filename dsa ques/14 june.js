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
//squares betwwen 2 no.
function squares(a, b) {
    // Write your code here
    let res =0
   for(let i=1;i<=b;i++){
       let sq =i*i
       if(sq >=a && sq<=b){
           res++
       }
       if(sq>b){
           break
       }
   }
   return res
}
//product of arr
function productExceptSelf(a, n)
{
    let prod = 1;
    let flag = 0;
 
    // Product of all elements
    for(let i = 0; i < n; i++)
    {
         
        // Counting number of elements
        // which have value
        // 0
        if (a[i] == 0)
            flag++;
        else
            prod *= a[i];
    }
 
    // Creating a new array of size n
    let arr = Array(n).fill(0);
    for(let i = 0; i < n; i++)
    {
         
        // If number of elements in
        // array with value 0
        // is more than 1 than each
        // value in new array
        // will be equal to 0
        if (flag > 1)
        {
            arr[i] = 0;
        }
 
        // If no element having value
        // 0 than we will
        // insert product/a[i] in new array
        else if (flag == 0)
            arr[i] = (prod / a[i]);
 
        // If 1 element of array having
        // value 0 than all
        // the elements except that index
        // value , will be
        // equal to 0
        else if (flag == 1 && a[i] != 0)
        {
            arr[i] = 0;
        }
 
        // If(flag == 1 && a[i] == 0)
        else
            arr[i] = prod;
    }
    return arr;
}
     