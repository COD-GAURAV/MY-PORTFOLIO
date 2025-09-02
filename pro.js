const menuBar = document.getElementById("bar")
const cross = document.getElementById("cross")
const project = document.getElementById("project")
const home = document.getElementById("mehome")
const about = document.getElementById("meabout")
const skill = document.getElementById("meskill")
const contact = document.getElementById("mecontact")
let nameType = document.getElementById("name")
const DownloadBtn1 = document.getElementById("Download-1") 

menuBar.addEventListener("click",function(e){
  document.getElementById("option").style.display = `flex`
  document.getElementById("option").style.position = `fixed`
  project.style.display = "none"
  document.getElementById("content").style.display = `none`
  cross.style.display = `flex`
})


cross.addEventListener("click",function(e){
  document.getElementById("option").style.display = `none`
  document.getElementById("option").style.position = `none`
  project.style.display = "flex"
  document.getElementById("content").style.display = `flex`
  cross.style.display = `none`
})

function closedAndOpen(){
  document.getElementById("option").style.display = `none`
  document.getElementById("option").style.position = `none`
  project.style.display = "flex"
  document.getElementById("content").style.display = `flex`
  cross.style.display = `none`
}

home.addEventListener("click",function(e){
  closedAndOpen()
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

about.addEventListener("click",function(e){
  closedAndOpen()
  window.scrollTo({
    top:1770,
    left:0,
    behavior:"smooth"
  })
  
})

skill.addEventListener("click",function(e){
  closedAndOpen()
  window.scrollTo({
    top:2077,
    left:0,
    behavior:"smooth"
  })
})

contact.addEventListener("click",function(e){
  closedAndOpen()
  window.scrollTo({
    top:3224.25,
    left:0,
    behavior:"smooth"
  })
})



window.addEventListener("scroll",(e)=>{
  console.log(`${scrollY} : px`)
})


document.getElementById("arrow").addEventListener("click",(e)=>{
  closedAndOpen()
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

function TypeScript(){
  
  let productName = `  Hey Gaurav Here  `


  let moving = true
  let index = 0

  setInterval(function(){
    if(moving){
      index++
      if(index === productName.length){
        moving = false
        index = productName.length + 1
      }
    }
    else{
      index--
      if(index < 0){
        index = 0
        moving = true
      }
      
    }
    
    nameType.textContent = productName.substring(0,index) + "!"
 

  },80)
}


TypeScript()  
    
   
 DownloadBtn1.addEventListener("click",(e)=>{
  window.open("gaurav cv.pdf","_blank")
 })

 document.getElementById("Download-2").addEventListener("click",(e)=>{
  window.open("gaurav cv.pdf","_blank")
 })

 const gPhoto = document.getElementById("g-photo")

let backgroundImage = ["gaurav.jpeg","photo\ 5.jpeg","photo-1.jpg"]

let backgroundIndex = 0

setInterval(function(){
  backgroundIndex++
  gPhoto.setAttribute("src",backgroundImage[backgroundIndex])
 
  if(backgroundIndex === backgroundImage.length){
    backgroundIndex = 0
    gPhoto.setAttribute("src",backgroundImage[backgroundIndex])
  }
  console.log(backgroundIndex)
},3000)

