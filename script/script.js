const buttonref = document.querySelector("button")

function buttonalert() {
    alert("Thanks for Clicking!")
   // buttonref.removeEventListener("click" , buttonalert)
}

buttonref.addEventListener("click" , buttonalert, {once:true})
