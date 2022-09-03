/* MODAL1*/
const abrir = document.getElementById('ejer1');
const cerrar = document.getElementById('close');
const modal1 = document.getElementById('m1');
abrir.addEventListener('click', ()=>{
      modal1.classList.replace("m1","cambio1");
      modal2.classList.replace("cambio2","m2");
      modal3.classList.replace("cambio3","m3");
      modal4.classList.replace("cambio4","m4");
      modal5.classList.replace('cambio5','m5');
});

cerrar.addEventListener('click', ()=>{
      modal1.classList.replace('cambio1','m1');
});




/*MODAL2 */
const abrir2 = document.getElementById('ejer2');
const modal2 = document.getElementById('m2');
const cerrar2 = document.getElementById('close2');

abrir2.addEventListener('click', ()=>{
      modal1.classList.replace('cambio1','m1');
      modal2.classList.replace('m2','cambio2');
      modal3.classList.replace('cambio3','m3');
      modal4.classList.replace('cambio4','m4');
      modal5.classList.replace('cambio5','m5');
});

cerrar2.addEventListener('click', ()=>{
      modal2.classList.replace('cambio2','m2');
});


/*MODAL3*/
const abrir3 = document.getElementById('ejer3');
const modal3 = document.getElementById('m3');
const cerrar3 = document.getElementById('close3');

abrir3.addEventListener('click', ()=>{
      modal1.classList.replace('cambio1','m1');
      modal2.classList.replace("cambio2","m2");
      modal3.classList.replace('m3','cambio3');
      modal4.classList.replace("cambio4","m4");
      modal5.classList.replace('cambio5','m5');
});

cerrar3.addEventListener('click', ()=>{
      modal3.classList.replace('cambio3','m3')
});
/*MODAL4*/
const abrir4 = document.getElementById('ejer4');
const modal4 = document.getElementById('m4');
const cerrar4 = document.getElementById('close4');

abrir4.addEventListener('click', ()=>{
      modal1.classList.replace('cambio1','m1');
      modal2.classList.replace("cambio2","m2");
      modal3.classList.replace('cambio3','m3');
      modal4.classList.replace('m4','cambio4');
      modal5.classList.replace('cambio5','m5');
});

cerrar4.addEventListener('click', ()=>{
      modal4.classList.replace('cambio4','m4');
});

/*MODAL5*/
const abrir5 = document.getElementById('ejer5');
const modal5 = document.getElementById('m5');
const cerrar5 = document.getElementById('close5');

abrir5.addEventListener('click', ()=>{
      modal1.classList.replace('cambio1','m1');
      modal2.classList.replace("cambio2","m2");
      modal3.classList.replace('cambio3','m3');
      modal4.classList.replace('cambio4','m4');
      modal5.classList.replace('m5','cambio5');
});

cerrar5.addEventListener('click', ()=>{
      modal5.classList.replace('cambio5','m5');
});