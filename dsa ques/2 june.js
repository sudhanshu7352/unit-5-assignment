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
 //Forming a Magic Square
//  Sample Input 0

// 4 9 2
// 3 5 7
// 8 1 5
// Sample Output 0

// 1 
function formingMagicSquare(s) {
    // Write your code here
      let cost = 1000;
  let t =
          [
                  [4,9,2,3,5,7,8,1,6],
                  [4,3,8,9,5,1,2,7,6],
                  [2,9,4,7,5,3,6,1,8],
                  [2,7,6,9,5,1,4,3,8],
                  [8,1,6,3,5,7,4,9,2],
                  [8,3,4,1,5,9,6,7,2],
                  [6,7,2,1,5,9,8,3,4],
                  [6,1,8,7,5,3,2,9,4],
          ];
  let temp = 0;
  for(let i=0;i<8;i++){
    temp = Math.abs(s[0][0]-t[i][0]) + Math.abs(s[0][1]-t[i][1]) +Math.abs(s[0][2]-t[i][2]) +
            Math.abs(s[1][0]-t[i][3]) + Math.abs(s[1][1]-t[i][4]) + Math.abs(s[1][2]-t[i][5]) + 
            Math.abs(s[2][0]-t[i][6]) + Math.abs(s[2][1]-t[i][7]) + Math.abs(s[2][2]-t[i][8]);
    cost = temp<cost?temp:cost;
  }
  return cost;
}
