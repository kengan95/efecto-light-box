/*const images=document.querySelectorAll('.img')
const containerImg=document.querySelector('.container-img')
const imgShoW=document.querySelector('.img-show')
const copy=document.querySelector('.copy')
const closeModal=document.querySelector('.bx.bx-x')

images.forEach(image=>{
    image.addEventListener('click',()=>{
    addImage(image.getAttribute('src'),image.getAttribute('alt'))
    })
}) 

const addImage=(srcImg,altImg)=>{
    containerImg.classList.toggle('move')
    imgShoW.classList.toggle('show')
    imgShoW.src=srcImg
    copy.innerHTML=altImg
} 

closeModal.addEventListener('click',()=>{
    containerImg.classList.toggle('move')
    imgShoW.classList.toggle('show')
})*/ 



const images=document.querySelectorAll('.img')
const containerIMAGEN=document.querySelector('.container-img')
const imagenSHOW=document.querySelector('.img-show') 
const copy=document.querySelector('.copy') 
const closeMODAL=document.querySelector('.bx.bx-x') 

images.forEach(image=>{
    image.addEventListener('click',()=>{ 
        addIMAG(image.getAttribute('src'),image.getAttribute('alt'))

    })
}) 

 const addIMAG=(srcIMG, altIMG)=>{
    containerIMAGEN.classList.toggle('move') 
    imagenSHOW.classList.toggle('show') 
    imagenSHOW.src=srcIMG 
    copy.innerHTML=altIMG
 } 

 closeMODAL.addEventListener('click',()=>{ 
    containerIMAGEN.classList.toggle('move') 
    imagenSHOW.classList.toggle('show') 


 })