/*RETO1*/
/*LONGITUD*/
const long = document.getElementById('longitud');
long.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.length;
      alert(`la longitud del texto "${palabra}" es ${calculo}`);
})
/*MAYUSCULAS */
const mayu = document.getElementById('mayu');
mayu.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.toUpperCase();
      alert(`conversion de "${palabra}" a mayúscula es "${calculo}"`);
})
/*MINUSCULAS*/
const mini = document.getElementById('mini');
mini.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.toLowerCase();
      alert(`conversion de "${palabra}" a minúsculas es "${calculo}"`);
})
/*PRIMERA LETRA */
const uni = document.getElementById('pri');
uni.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.charAt();
      alert(`la primera letra de "${palabra}" es "${calculo}"`);
})