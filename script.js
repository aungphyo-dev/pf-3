let BAR = document.querySelector('.fa-bars');
let BARX = document.querySelector('#iconX');
let secnodmenu = document.querySelector('.secnod-menu');
BAR.addEventListener('click',() => {
   secnodmenu.style.height='260px';
   BARX.style.display='inline-block';
   BAR.style.display='none'

})
BARX.addEventListener('click', () => {
   secnodmenu.style.height='0px';
   BARX.style.display='none';
   BAR.style.display='inline-block'
})

let currentprogess = document.querySelector('.current-progess');
let sklr = document.querySelector('#sklr');
let currentprogessSTV =0;
let currentprogessENDV = 95;
let SKILL = setInterval(() => {
   currentprogessSTV++;
   sklr.textContent=`${currentprogessSTV}%`;
   currentprogess.style.width=`${currentprogessSTV}%`
   if(currentprogessSTV===currentprogessENDV){
      clearInterval(SKILL)
   }
}, 10);
let cp2 = document.querySelector('.cp2');
let sklr2 = document.querySelector('#sklr2');
let currentprogessSTV2 =0;
let currentprogessENDV2 = 85;
let SKILL2 = setInterval(() => {
   currentprogessSTV2++;
   sklr2.textContent=`${currentprogessSTV2}%`;
   cp2.style.width=`${currentprogessSTV2}%`
   if(currentprogessSTV2===currentprogessENDV2){
      clearInterval(SKILL2)
   }
}, 10);
let cp3 = document.querySelector('.cp3');
let sklr3 = document.querySelector('#sklr3');
let currentprogessSTV3 =0;
let currentprogessENDV3 = 75;
let SKILL3 = setInterval(() => {
   currentprogessSTV3++;
   sklr3.textContent=`${currentprogessSTV3}%`;
   cp3.style.width=`${currentprogessSTV3}%`
   if(currentprogessSTV3===currentprogessENDV3){
      clearInterval(SKILL3)
   }
}, 10);
// boxlink1
let boxlink = document.querySelector('.box-link');
let underline = document.querySelector('.underline');
boxlink.addEventListener('mouseenter',()=>{
   underline.style.width='88px';
})
boxlink.addEventListener('mouseleave',()=>{
   underline.style.width='0px';
})
// boxlink1

// boxlink2
let BX2 = document.querySelector('#BX-2');
let UD2 = document.querySelector('#UD-2');
BX2.addEventListener('mouseenter',()=>{
   UD2.style.width='88px';
})
BX2.addEventListener('mouseleave',()=>{
   UD2.style.width='0px';
})
// boxlink2

// boxlink3
let BX3 = document.querySelector('#BX-3');
let UD3 = document.querySelector('#UD-3');
BX3.addEventListener('mouseenter',()=>{
   UD3.style.width='88px';
})
BX3.addEventListener('mouseleave',()=>{
   UD3.style.width='0px';
})
// boxlink3

// boxlink4
let BX4 = document.querySelector('#BX-4');
let UD4 = document.querySelector('#UD-4');
BX4.addEventListener('mouseenter',()=>{
   UD4.style.width='88px';
})
BX4.addEventListener('mouseleave',()=>{
   UD4.style.width='0px';
})
// boxlink4

// boxlink4
let BX5 = document.querySelector('#BX-5');
let UD5 = document.querySelector('#UD-5');
BX5.addEventListener('mouseenter',()=>{
   UD5.style.width='88px';
})
BX5.addEventListener('mouseleave',()=>{
   UD5.style.width='0px';
})
// boxlink4


// boxlink4
let BX6 = document.querySelector('#BX-6');
let UD6 = document.querySelector('#UD-6');
BX6.addEventListener('mouseenter',()=>{
   UD6.style.width='88px';
})
BX6.addEventListener('mouseleave',()=>{
   UD6.style.width='0px';
})
// boxlink4

let IMGB1 = document.querySelector(' .bxH-1');
let C4I1 = document.querySelector('.c4-i-hv-1');
let C4C1 = document.querySelector('.c4-c-hv-1');
IMGB1.addEventListener('mouseenter',()=>{
   C4C1.style.display='inline-block';
   C4I1.style.display='grid';
})
IMGB1.addEventListener('mouseleave',()=>{
   C4C1.style.display='none';
   C4I1.style.display='none';
})

let IMGB2 = document.querySelector(' .bxH-2');
let C4I2 = document.querySelector('.c4-i-hv-2');
let C4C2 = document.querySelector('.c4-c-hv-2');
IMGB2.addEventListener('mouseenter',()=>{
   C4C2.style.display='inline-block';
   C4I2.style.display='grid';
})
IMGB2.addEventListener('mouseleave',()=>{
   C4C2.style.display='none';
   C4I2.style.display='none';
})

let IMGB3 = document.querySelector(' .bxH-3');
let C4I3 = document.querySelector('.c4-i-hv-3');
let C4C3 = document.querySelector('.c4-c-hv-3');
IMGB3.addEventListener('mouseenter',()=>{
   C4C3.style.display='inline-block';
   C4I3.style.display='grid';
})
IMGB3.addEventListener('mouseleave',()=>{
   C4C3.style.display='none';
   C4I3.style.display='none';
})

let IMGB4 = document.querySelector(' .bxH-4');
let C4I4 = document.querySelector('.c4-i-hv-4');
let C4C4 = document.querySelector('.c4-c-hv-4');
IMGB4.addEventListener('mouseenter',()=>{
   C4C4.style.display='inline-block';
   C4I4.style.display='grid';
})
IMGB4.addEventListener('mouseleave',()=>{
   C4C4.style.display='none';
   C4I4.style.display='none';
})

let IMGB5 = document.querySelector(' .bxH-5');
let C4I5 = document.querySelector('.c4-i-hv-5');
let C4C5 = document.querySelector('.c4-c-hv-5');
IMGB5.addEventListener('mouseenter',()=>{
   C4C5.style.display='inline-block';
   C4I5.style.display='grid';
})
IMGB5.addEventListener('mouseleave',()=>{
   C4C5.style.display='none';
   C4I5.style.display='none';
})

let IMGB6 = document.querySelector(' .bxH-6');
let C4I6 = document.querySelector('.c4-i-hv-6');
let C4C6 = document.querySelector('.c4-c-hv-6');
IMGB6.addEventListener('mouseenter',()=>{
   C4C6.style.display='inline-block';
   C4I6.style.display='grid';
})
IMGB6.addEventListener('mouseleave',()=>{
   C4C6.style.display='none';
   C4I6.style.display='none';
})

let UDD1 = document.querySelector('.UDC-1');
let UDC1 = document.querySelector('.CHD-1');
UDC1.addEventListener('mouseenter',()=>{
   UDD1.style.width='93px'
})
UDC1.addEventListener('mouseleave',()=>{
   UDD1.style.width='0px'
})

let UDD2 = document.querySelector('.UDC-2');
let UDC2 = document.querySelector('.CHD-2');
UDC2.addEventListener('mouseenter',()=>{
   UDD2.style.width='160px'
})
UDC2.addEventListener('mouseleave',()=>{
   UDD2.style.width='0px'
})

let UDD3 = document.querySelector('.UDC-3');
let UDC3 = document.querySelector('.CHD-3');
UDC3.addEventListener('mouseenter',()=>{
   UDD3.style.width='145px'
})
UDC3.addEventListener('mouseleave',()=>{
   UDD3.style.width='0px'
})

let scrollcircle = document.querySelector('.scroll-circle');

scrollcircle.addEventListener('click',()=>{
   window.scroll(0,0)
})