'use strict';


const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')
const showModal = document.querySelectorAll('.show-modal')

showModal[0].addEventListener('mouseenter', (btn) => {
    btn.target.style.background = 'black'
})

const closeModall = () => {
    modal.classList.add('hidden')   
    overlay.classList.add('hidden')
}

showModal.forEach((btn)=>{
    btn.addEventListener( 'click', (ev) => {
    
modal.classList.remove('hidden')
overlay.classList.remove('hidden')

})
    })


closeModal.addEventListener('click', () => {
     closeModall()
})

overlay.addEventListener('click', () => {
        closeModall()
})

document.addEventListener("keyup" , (event) => {
    console.log(event)
       if (event.key === 'Escape') {
                  closeModall()
       }
       
});









