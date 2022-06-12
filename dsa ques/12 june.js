//jumping on the  clouds

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy =100
    let cloud =0
    let n= c.length
    while(true){
        cloud =(cloud+k)%n
        
        if(c[cloud]==1){
            energy -=3
        }else{
        energy -=1
            
        }
        if(cloud ==0){
           //  cloud==0
            break
        }
    }
            return energy
   
   }

   //append and delete
   function appendAndDelete(s, t, k) {
    // Write your code here
   let same=""
   for(let i=0;i<s.length &&i<t.length;i++){
       if(s[i] !=t[i]){
           break
       }else{
           same +=s[i]
       }
   }
   const min =(s.length-same.length)+(t.length-same.length)
   
   const max =s.length+t.length
   const possible = (k>=max) || (k>=min  && min %2 ==k%2 )
   
   return possible ? "Yes" :"No"
}
