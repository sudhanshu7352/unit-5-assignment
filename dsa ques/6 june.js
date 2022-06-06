
let arr = ["1", "Sudhanshu", "2", "Sudhanshu", "1","3", "Alok", "2", "Alok", "1"]
let obj={}
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]=obj[arr[i]]+1
    }
}
console.log(obj)
//save the prisoners
function saveThePrisoner(n, m, s) {
    // Write your code here
    // const ans =(((m % n)+s)%n)-1
    // if(ans==0){
    //     return n
    // }else{
    //     return ans
    // }
    return (m-1+s)%n ||n

}
//circularArrayRotation

/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
    // Write your code here
   let temp=k
   while(temp>0){
       a.unshift(a.pop())
       temp--
   }
   for(let i=0;i<queries.length;i++){
      
        queries[i] =(a[queries[i]])
   }

return queries
}