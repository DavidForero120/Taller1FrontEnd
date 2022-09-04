/*RETO1*/
/*LONGITUD*/
const long = document.getElementById('longitud');
long.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.length;
      alert(`la longitud del texto "${palabra}" es ${calculo}`);
});
/*MAYUSCULAS */
const mayu = document.getElementById('mayu');
mayu.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.toUpperCase();
      alert(`conversion de "${palabra}" a mayúscula es "${calculo}"`);
});
/*MINUSCULAS*/
const mini = document.getElementById('mini');
mini.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.toLowerCase();
      alert(`conversion de "${palabra}" a minúsculas es "${calculo}"`);
});
/*PRIMERA LETRA */
const uni = document.getElementById('pri');
uni.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.charAt();
      alert(`la primera letra de "${palabra}" es "${calculo}"`);
});

/*EJERCICIO2*/
/*CONVERTIR GRADOS*/

/*EJERCICIO3*/


const averiguar = document.getElementById('trig');

averiguar.addEventListener('click',()=>{
      const lad1 = document.getElementById('lado1').value;
      const lad2 = document.getElementById('lado2').value;
      const lad3 = document.getElementById('lado3').value;
      parseFloat(lad1);parseFloat(lad2);parseFloat(lad3);
      if(lad1==lad2 && lad1 ==lad3){
            alert(`El triangulo es equilatero ya que sus lados son iguales.`)
      }else if(lad1==lad2 || lad2==lad3 || lad1==lad3){
            alert(`El triangulo es isósceles, dos lados son similares.`);
      }else{
            alert(`El triangulo es ecaleno, todos sus lados son diferentes.`);
      }
      
})


