//cut the sticks
function cutTheSticks(arr) {
    // Write your code here
    arr.sort((a,b)=>a-b)
    let i=0
    let ans=[]
    while(i<arr.length){
        ans.push(arr.length-i)
        
        while(arr[i] ==arr[i+1]){
            i++
        }
        i++
    }
 return ans
}