
let timer;
let divBody =document.getElementById('div-body')

function normalCall(){

    let throttle_count = document.getElementById('debounc-count')

    let count = throttle_count.innerHTML ||0

    throttle_count.innerHTML = parseInt(count) +1
}

let throttleFunc =(func,delay)=>{
    // If setTimeout is already scheduled, no need to do anything
	if (timer) {
		return
	}

	// Schedule a setTimeout after delay seconds
    timer =setTimeout(()=>{
        func()

        	// Once setTimeout function execution is finished, timerId = undefined so that in <br>
		// the next scroll event function execution can be scheduled by the setTimeout
        timer =undefined
    },delay)
}

divBody.addEventListener('scroll',()=>{

    let apiCall =document.getElementById("show-api-call-count")

    let apicallCount =apiCall.innerHTML || 0

    apicallCount =+(apicallCount) +1

    apiCall.innerHTML =apicallCount
    throttleFunc(normalCall,500)
})