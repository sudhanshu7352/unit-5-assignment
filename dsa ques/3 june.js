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