//print in reverse
function reversePrint(head) {
    // Write your code here
      if(head == null) return;
    
   var temp = head;
  let st = [];
   while(temp!=null)
   {
       st.push(temp.data);
       temp = temp.next;
   }
    
   while(st.length > 0)
   {
       console.log(st.pop());
   }

}
//sparse arrays

function matchingStrings(strings, queries) {
    // Write your code here
    let obj={}
    for(let i=0;i<strings.length;i++){
        if(obj[strings[i]]==undefined){
            obj[strings[i]]=1
        }else{
            obj[strings[i]]=obj[strings[i]]+1
        }
    }
    let ans =[]
    for(let i=0;i<queries.length;i++){
        if(obj.hasOwnProperty(queries[i])){
        ans.push(obj[queries[i]])
        }else{
            ans.push(0)
        }
  
 }
 return ans
// console.log(ans)
}

