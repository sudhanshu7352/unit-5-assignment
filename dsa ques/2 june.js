//Cats and  a Mouse
//Sample Input 0

// 2
// 1 2 3
// 1 3 2
// Sample Output 0

// Cat B
// Mouse C
function catAndMouse(x, y, z) {
  
    let c1 =Math.abs(x-z)
    let c2 =Math.abs(y-z)
    
    if(c1>c2){
        return 'Cat B'
    }else if(c2>c1){
        return 'Cat A'
    }else{
        return 'Mouse C'
    }
  
  }
  