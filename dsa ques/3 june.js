//the hurdle race
// Sample Input 0

// 5 4
// 1 6 3 5 2
// Sample Output 0

// 2

function hurdleRace(k, height) {
    // Write your code here
  let max = -999
  
  for(let i=0;i<height.length;i++){
      if(height[i] >max){
          max=height[i]
      }
      
  }
  if(max>k){
      return max-k
  }else{
      return 0
  }
}
// let btn=document.getElementById("btn")
// btn.addEventListener(onclick,add)

// function add(){
//     btn.innerHTML +=1
// }
//designer pdf viwer
//Sample Input 0

// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc
// Sample Output 0

// 9


function designerPdfViewer(h, word) {
    // Write your code here
    let tallest =0
    let index=0
    
    for(let i=0;i<word.length;i++){
        index =word.charCodeAt(i)-97
        
        if(h[index]>tallest){
            tallest =h[index]
        }
    }
    return tallest*word.length
}
//Utopian tree
// Sample Input

// 3
// 0
// 1
// 4
// Sample Output

// 1
// 2
// 7

function utopianTree(n) {
    // Write your code here
    let height =1
   for(let i=1;i<=n;i++){
       if(i%2==1){
           height *=2
       }else if(i%2==0) {
           height +=1
       }
   }
   return height
}
//angry professor
function angryProfessor(k, a) {
    // Write your code here
  let res=0
  for(let i=0;i<a.length;i++){
      if(a[i]<=0){
          res++
      }
  }
 if(res >= k){
     return "NO"
 }else{
     return "YES"
 }
}