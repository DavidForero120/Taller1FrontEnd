/* MODAL1*/
const abrir = document.getElementById('ejer1');
const modal1 = document.getElementById('m1');
const cerrar = document.getElementById('close');

abrir.addEventListener('click', ()=>{
      modal1.style.display="flex";
      modal2.style.display="none";
      modal3.style.display="none";
      modal4.style.display="none";
});

cerrar.addEventListener('click', ()=>{
      modal1.style.display="none";
});




/*MODAL2 */
const abrir2 = document.getElementById('ejer2');
const modal2 = document.getElementById('m2');
const cerrar2 = document.getElementById('close2');

abrir2.addEventListener('click', ()=>{
      modal2.style.display="flex";
      modal1.style.display="none";
      modal3.style.display="none";
      modal4.style.display="none";
});

cerrar2.addEventListener('click', ()=>{
      modal2.style.display="none";
});


/*MODAL3*/
const abrir3 = document.getElementById('ejer3');
const modal3 = document.getElementById('m3');
const cerrar3 = document.getElementById('close3');

abrir3.addEventListener('click', ()=>{
      modal3.style.display="flex";
      modal2.style.display="none";
      modal4.style.display="none";
      modal1.style.display="none";
});

cerrar3.addEventListener('click', ()=>{
      modal3.style.display="none";
});


/*MODAL4*/
const abrir4 = document.getElementById('ejer4');
const modal4 = document.getElementById('m4');
const cerrar4 = document.getElementById('close4');

abrir4.addEventListener('click', ()=>{
      modal4.style.display="flex";
      modal1.style.display="none";
      modal3.style.display="none";
      modal2.style.display="none";
});

cerrar3.addEventListener('click', ()=>{
      modal4.style.display="none";
});