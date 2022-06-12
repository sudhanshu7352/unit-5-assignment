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