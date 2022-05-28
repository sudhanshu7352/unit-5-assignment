// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.
// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2



function birthday(s, d, m) {
    // Write your code here
    let sum=0
    let count =0
    for(let i=0;i<m;i++){
        sum += s[i]
    }
    if(sum==d){
        count++
    }
    
    for(let i=m;i<s.length;i++){
        sum = sum +s[i]-s[i-m]
        if(sum==d){
            count++
        }
    }
    return count
}
