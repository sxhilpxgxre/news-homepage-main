const menu=document.querySelector('#menu');
const menu_Cont=document.querySelector('.mobile-menu');
const close_btn=document.querySelector('#closed-menu');
const body=document.querySelector('body');


//clicking on the menu icon
menu.addEventListener('click',()=>{
    menu_Cont.style.display="block";
    body.style.backgroundColor=""
    console.log('menu clicked!!')
});

//clicking on closed icon to closed the menu contaner
close_btn.addEventListener('click',()=>{
    menu_Cont.style.display="none";
    console.log('Menu closed!!')
});