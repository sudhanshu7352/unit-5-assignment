import "./index.css"
import logo from "./amazon logo.png"

const img =document.createElement("img")
img.src =logo
// const input1 = document.createElement("input")
// // in
// input1.id ="inp"
// const bt =document.createElement("button")
// bt.innerText ="add note";


let box =document.getElementById("box")
box.append(img);
// let text =document.getElementById("inp").value;
// console.log(text)
// div.append(input,bt)
let arr =JSON.parse(localStorage.getItem("todo")) || []
//let arr =[]
display(arr)
function display(e){
    document.getElementById("container").textContent ="";
    arr.map((elem,index)=>{
        let div =document.createElement("div")
         let h2 =document.createElement("h2")
         h2.textContent =elem.title;

         var remove =document.createElement("button")
         remove.textContent ="Remove"
         remove.addEventListener("click",()=>{
             del(index)
         })
         
         div.append(h2,remove)
         document.getElementById("container").append(div)
    })
   
}
 document.getElementById("but").addEventListener("click",show)

function show(event){
    event.preventDefault();

   let title = document.querySelector("#title").value;
   let obj={
       title
   }

   arr.push(obj);
   localStorage.setItem("todo",JSON.stringify(arr))
   display(arr)
}

function del(elem){
   
    arr.splice(elem,1)
    display(arr);
    localStorage.setItem("todo",JSON.stringify(arr))
}



