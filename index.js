let IdOne =document.getElementById('innerMain')
let b=document.getElementById('btn')
let IdTwo=document.getElementById('hidden')
let c=document.getElementById('pic')
let d=document.getElementById('transformed');
console.log(d)


b.addEventListener('click',action)

function action()
{
    IdOne.style.display='none'
    IdTwo.style.display='block' 
    d.style.backgroundColor="rgba(0,0,0,0.5)" 
    d.style.height='572px'
   
  
}

c.addEventListener('click',end)

function end(){
    IdOne.style.display='block'
    IdTwo.style.display='none'
    d.style.backgroundColor='' 
    d.style.opacity=''
    d.style.height=''


}



