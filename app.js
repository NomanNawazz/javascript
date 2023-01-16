const dada = document.querySelector('.grand')
const papa = document.querySelector('.parent')
const beta = document.querySelector('.child')

// dada.addEventListener("click", printhi)

// setTimeout(()=>{
//     dada.removeEventListener("click", printhi)
// }, 2000)

papa.addEventListener("click", e=>{
    console.log('nawaz')
})
beta.addEventListener("click", e=>{
    console.log('noman')
})


{once: true}

function printhi(){
    console.log("hi")
}

const divs = document.querySelectorAll("div")

divs.forEach( div=> {
    div.addEventListener("click", () => {
        console.log("hello world")
    })
})

const newDiv = document.createElement("div")
newDiv.style.width = "30%"
newDiv.style.height ="30vh"
newDiv.style.backgroundColor="black"

dada.addEventListener("click", e=>{
    document.body.append(newDiv)
})
