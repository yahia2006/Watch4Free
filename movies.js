
let divs=document.getElementsByClassName('imgdiv')
let imgs=document.querySelectorAll('.imgdiv img')
let title=document.getElementById('title')
let type=document.getElementById('type')
for(let i=0;i<divs.length;i++){
    divs[0].addEventListener('mouseover',function(){
        title.innerText="Spider Man 3"
        type.innerText="Fantasy Action Comedy"
        
    })
    divs[1].addEventListener('mouseover',function(){
        title.innerText="John Wick 4"
        type.innerText="Action Drama Rommance"
    })
    divs[2].addEventListener('mouseover',function(){
        title.innerHTML="Thor Ragnarok"
        type.innerHTML="Fantasy Action Drama"
    })
}
let navclose=document.getElementById('navclose')
let navopen=document.getElementById('navopen')
navopen.addEventListener('click',function(){
    document.getElementById('nv').style.top='10%'
    navopen.style.display='none'
    navclose.style.display='block'
})
navclose.addEventListener('click',function(){
    document.getElementById('nv').style.top='-150%'
    navopen.style.display='block'
    navclose.style.display='none'
})








window.onpageshow=function(){
    document.getElementById('mt').style.transform='translateX(0)'
    document.getElementById('mi').style.scale='1'
    
}
window.addEventListener('scroll',()=>{
    if(window.scrollY>120){
        document.getElementById('tonav').style.scale='1'
        document.getElementById('tonav').addEventListener('click',()=>{
            window.scrollTo(0,0)
        })
    }
    if(window.scrollY<120){
        document.getElementById('tonav').style.scale='0'

    } 
})







