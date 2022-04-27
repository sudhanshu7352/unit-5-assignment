
let button =document.getElementById("button_id")
let colorDiv =document.getElementById("color_div")
  colorDiv.innerHTML = 1
function toggler() {
     if(colorDiv.innerHTML <3){
         colorDiv.innerHTML = +(colorDiv.innerHTML) + 1
         colorDiv.style.backgroundColor ="rgb(67, 152, 226)"
        // console.log(colorDiv.innerHTML)
     }else{
         colorDiv.innerHTML =1
         colorDiv.style.backgroundColor ="firebrick"
     }
}

button.addEventListener("click", toggler)