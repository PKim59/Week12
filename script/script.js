const buttonref = document.querySelector("button")
    // remember the code above only selects the FIRST item that is "button"

function addNewButtonandPara() {
    let newbutton = document.createElement("button")
    let newp = document.createElement("p")
    document.body.appendChild(newbutton)
    document.body.appendChild(newp)
    newp.textContent = "PARAGRAPH TIME"
    newbutton.textContent = "Purple"
    newbutton.addEventListener("mouseover", bgbuttonchange)
}

buttonref.addEventListener("click", addNewButtonandPara)

function buttonalert() {
    alert("Thanks for Clicking!")
   // buttonref.removeEventListener("click" , buttonalert)
}

buttonref.addEventListener("click" , buttonalert)

function colourchangepink() {
    document.querySelector("body").classList.toggle("pinkbg")
}

buttonref.addEventListener("click" , colourchangepink)

// function changebuttontext() {
//     if (buttonref.innerText === "Click Me!") {
//         buttonref.innerText = "Clicked"
//     } else {
//             buttonref.innerText = "Click Me"
//     }

//     }

// buttonref.addEventListener("click" , changebuttontext)

function updateImage() {
    const image = document.querySelector("#Shoppingcart")
    console.log("print if working")
    image.setAttribute("src" , "https://cdn-icons-png.flaticon.com/512/263/263142.png")
    image.setAttribute("width" , 200)
    image.setAttribute("alt" , "image of a shopping cart")
    image.setAttribute("height", 100)
}

buttonref.addEventListener("click" , updateImage)

const buttoncontainer = document.querySelector(".buttoncontainer");

//event parameter automatically receives event object

function bgbuttonchange(event) {
    if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("greenbg")
    }
}
buttoncontainer.addEventListener("mouseover" , bgbuttonchange)

// Add another event listener to the div to change 
// the text color of the button when it is clicked to the color value on it.

buttoncontainer.addEventListener("click" , changetext)

function changetext(event)
{
    // just to show the text name, easy way to see what properties to target!
    console.log(event.target.textContent);
    // inline below! try to AVOID
    let newcolor = event.target.textContent;
    event.target.style.color = newcolor

    // or add class and css rule for each color, 
    // and use event.target.classList.add(newcolor)
}


