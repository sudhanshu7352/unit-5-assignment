//Given an array of integers and a positive integer k, determine the number of (i,j)  pairs where i<j and ar[i] +ar[j]  is divisible by 

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count =0
    
    for(let i=0;i<n;i++){
        
        for(let j=i;j<n;j++){
            if(i<j && (ar[i]+ar[j]) % k==0 ){
                //console.log(ar[i]+ar[j])
                count++
            }
        }
    }
    return count
    
}
