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
/*MODALES 5.1 */  
const cir = document.getElementById('cir');
const opc1 = document.getElementById('opciones')
cir.addEventListener('click',()=>{
      opc1.classList.replace('op1','mostrar');
      opc2.classList.replace('mostrar','op2');
      opc3.classList.replace('mostrar','op3');
      opc4.classList.replace('mostrar','op4');

      perimetroTriangulo.classList.replace('show2','triPer');
      areaTriangulo.classList.replace('show2','triArea');
});
/*------------*/
const tri = document.getElementById('tri');
const opc2 = document.getElementById('opciones2')
tri.addEventListener('click',()=>{
      opc1.classList.replace('mostrar','op1');
      opc2.classList.replace('op2','mostrar');
      opc3.classList.replace('mostrar','op3');
      opc4.classList.replace('mostrar','op4');

      areaC.classList.replace('show1','cirArea');
      perimetroC.classList.replace('show1','cirPerimetro');
      
});
/*-----------*/
const rec = document.getElementById('rec');
const opc3 = document.getElementById('opciones3')
rec.addEventListener('click',()=>{
      opc1.classList.replace('mostrar','op1');
      opc2.classList.replace('mostrar','op2');
      opc3.classList.replace('op3','mostrar');
      opc4.classList.replace('mostrar','op4');

      areaC.classList.replace('show1','cirArea');
      perimetroC.classList.replace('show1','cirPerimetro');

      perimetroTriangulo.classList.replace('show2','triPer');
      areaTriangulo.classList.replace('show2','triArea');
});
/*-----------*/
const cua = document.getElementById('cua');
const opc4 = document.getElementById('opciones4')
cua.addEventListener('click',()=>{
      opc1.classList.replace('mostrar','op1');
      opc2.classList.replace('mostrar','op2');
      opc3.classList.replace('mostrar','op3');
      opc4.classList.replace('op4','mostrar');

      areaC.classList.replace('show1','cirArea');
      perimetroC.classList.replace('show1','cirPerimetro');

      perimetroTriangulo.classList.replace('show2','triPer');
      areaTriangulo.classList.replace('show2','triArea');
});

/*---CIRCULO---*/
const areC = document.getElementById('are1');
const areaC = document.getElementById('cirArea');
areC.addEventListener('click', ()=>{
      areaC.classList.replace('cirArea','show1');
      perimetroC.classList.replace('show1','cirPerimetro');
});

const perC = document.getElementById('per1');
const perimetroC = document.getElementById('cirPerimetro');
perC.addEventListener('click',()=>{
      areaC.classList.replace('show1','cirArea');
      perimetroC.classList.replace('cirPerimetro','show1');
});
/*----TRIANGULO----*/
const areaT = document.getElementById('are2');
const areaTriangulo = document.getElementById('triArea');
areaT.addEventListener('click',()=>{
      areaTriangulo.classList.replace('triArea','show2');
      perimetroTriangulo.classList.replace('show2','triPer');
});
const areaP = document.getElementById('per2');
const perimetroTriangulo = document.getElementById('triPer');
areaP.addEventListener('click',()=>{
      perimetroTriangulo.classList.replace('triPer','show2');
      areaTriangulo.classList.replace('show2','triArea');
});
/*---RECTANGULO---*/