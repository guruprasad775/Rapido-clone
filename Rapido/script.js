let menu=document.querySelector('#menu');
let navlinks=document.querySelector('.nav-links');
let body=document.querySelector('body');

if(window.innerWidth<768){
   menu.addEventListener('click',()=>{
   navlinks.style.display='block';
   menu.style.display='none';
});
navlinks.addEventListener('click',()=>{
   navlinks.style.display='none';
   menu.style.display='block';
});
}

// window.addEventListener('resize',()=>{
//     if(window.innerWidth>768){
//         navlinks.style.display='block';
//         menu.style.display='none';
//     }
//     else{
//         navlinks.style.display='none';
//         menu.style.display='block';
//     }
// });

let inp1=document.querySelector('#inp1');
let inp2=document.querySelector('#inp2');
let h1one=document.querySelector('#h1one');
let h1two=document.querySelector('#h1two');
let submit=document.querySelector('#submit');
// submit.addEventListener('click',()=>{
//     if(inp1.value=='' && inp2.value==''){
//    h1one.innerHTML='Please enter a number';
//    h1two.innerHTML='Please enter a number';
// }

// });

submit.addEventListener('click',(e)=>{
  e.preventDefault();

    if(inp1.value=='' && inp2.value==''){
        h1one.innerHTML='please enter source';
        h1two.innerHTML='Please enter destination';
    }
    else if(inp1.value=='' && inp2.value!=''){
        h1one.innerHTML='please enter source';
        h1two.innerHTML='please enter a destination';
    }
    else if(inp1.value!='' && inp2.value==''){
        h1one.innerHTML='please enter a source';
        h1two.innerHTML='Please enter destination';
    }
    else if(inp1.value!='' && inp2.value!=''){
        h1one.style.display='none';
        h1two.style.display='none';
    }
    inp1.value='';
    inp2.value='';
})