const rainControls = document.getElementById("rainControls")
const rainImage= document.querySelector("#rainImage")
const body= document.querySelector("body")
let clickHandler={}

document.addEventListener("click",(e)=>{

    if(e.target.tagName ==="IMG"){
        e.target.nextElementSibling.play()
        if(clickHandler[e.target.nextElementSibling.id])
       clickHandler[e.target.nextElementSibling.id]+=1
    else{
        clickHandler[e.target.nextElementSibling.id]=1
    }
    if(clickHandler[e.target.nextElementSibling.id]>=2){
      document.querySelector(`#${e.target.nextElementSibling.id}`).pause()
      clickHandler[e.target.nextElementSibling.id]-=2
    }
    
    }
})


function colorChanger(){
    let Red=0;let Green=0;let Blue=0;

    setInterval(()=>{
        Red=Math.ceil(Math.random()*256)
        Green=Math.ceil(Math.random()*256)
        Blue=Math.ceil(Math.random()*256)
        body.style.background=`rgba(${Red}, ${Green}, ${Blue}, 0.8)`
    },6000
)
}
colorChanger()
