// console.log("Hello")
// const backgroundChanger = document.getElementById("backgroundChanger");
// backgroundChanger.addEventListener("click",()=>{
//     alert("button clicked")
//     window.document.body.style.background = "purple"
// })


//changing background colour from darker to lighter
// const backgroundChanger = document.getElementById("backgroundChanger");
// const lighterbackground = document.getElementById("lighterbackground");

// backgroundChanger.addEventListener("click",()=>{
//     //alert("button clicked")
//     window.document.body.style.background = "black"
// })

// lighterbackground.addEventListener("click",()=>{
//     window.document.body.style.background = "yellow"
// })

const click = document.getElementById("click")
const outer = document.getElementById("outer")

click.addEventListener("click",()=>{
    const inner = document.createElement("div");
    inner.setAttribute("id","inner")
    inner.innerHTML = "this is added after event"
    outer.appendChild(inner)
})



//march12
const userName = document.getElementById("userName").value;
const submitbtn = document.getElementById("submitbtn")
const output = document.getElementById("output")
console.log(userName)

//input event
submitbtn.addEventListener("click",(e)=>{
    const userName = document.getElementById("userName").value;
    e.preventDefault();
    output.innerHTML=userName
})


