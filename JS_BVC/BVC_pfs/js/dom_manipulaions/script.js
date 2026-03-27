// console.log(window)


// const header = document.getElementById("header")
// console.log(header)
// header.style.color = "blue"
// header.style.backgroundColor = "yellow"
// const classSelector = document.getElementsByClassName("classSelector")
// console.log(classSelector)
// classSelector[0].style.color = "yellow"
// classSelector[1].style.color = "green"
// classSelector[2].style.color = "black"
// const arr = Array.from(classSelector)
// console.log(classSelector)

// arr.forEach((ele)=> {
//     ele.style.color = "blue"
// })

// const h3 = document.getElementsByTagName("h3")
// console.log(h3)
// const arrr = Array.from(h3)
// arrr.forEach((ele)=>{
//     ele.style.color = "black"
//     ele.style.backgroundColor = "aqua"
// })

// const classSelector  = document.querySelector(".classSelector")
// console.log(classSelector)
// classSelector.style.color = "blue"

// const h3 = document.querySelector("h3")
// console.log(h3)
// h3.style.color = "blue"
// h3.style.backgroundColor = "green"


//using query selector all
// const classSelector = document.querySelectorAll(".classSelector")
// console.log(classSelector)

// classSelector.forEach((ele)=>{
//     ele.style.color = "purple"
// })

// const h3 = document.querySelectorAll("h3")
// h3.forEach((ele)=>{
//     ele.style.color = "blue"
//     //ele.style.backgroundColor = "aqua"
// })

const header = document.querySelector("#header")
const main = document.getElementById("main")
const outer = document.getElementById("outer")
header.textContent = "Hello Adam, how are you?"
main.innerHTML = "<p>This is the inner html text</p>"

const inner = document.createElement("div")
inner.setAttribute("class","inner")

inner.innerHTML = "<p>Hello</p>"

outer.removeChild(inner)