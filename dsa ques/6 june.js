
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