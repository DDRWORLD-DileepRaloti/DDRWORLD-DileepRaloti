console.log('this is ddr World')
nav = document.querySelector('nav #nav-ul')
console.log(nav);
// nav.style.display = 'block'
open = document.querySelector('#open-icon')
close = document.querySelector('#close-icon')

document.querySelector('#open-icon').addEventListener('click',(e)=>{
nav.style.display = 'block'
close.style.display = 'block'
open.style.display = 'none'
})

document.querySelector('#close-icon').addEventListener('click',(e)=>{
nav.style.display = 'none'
close.style.display = 'none'
open.style.display = 'block'
})
