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