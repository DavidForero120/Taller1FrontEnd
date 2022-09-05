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
const verify = document.getElementById('cal');
verify.addEventListener('click', ()=>{
      const dato = document.getElementById('grados').value;
      const grado = document.getElementById('inf').value
      parseInt(dato);
      if(dato==1){       
                  const valor = parseFloat(grado) + 273.15;
                  alert(`los ${grado} grados celsius a kelvin son: ${valor}`)
      }else if(dato==2){
            const valor = (parseFloat(grado)*1.8) + 32;
                  alert(`los ${grado} grados celsius a Fahrenheit son: ${valor}`);
      }else if(dato == 3){
            const valor = (parseFloat(grado)-32) * (5/9);
            alert(`los ${grado} grados Fahrenheit a celsius son: ${valor.toFixed(2)}`);
      }else if(dato == 4){
            const valor = (parseFloat(grado)-32)*(5/9) + 273.15;
            alert(`los ${grado} grados Fahrenheit a kelvin son: ${valor.toFixed(2)}`);      
      }else if(dato == 5){
            const valor = (parseFloat(grado)-273.15)*(9/5) + 32;
            alert(`los ${grado} grados kelvin a Fahrenheit son: ${valor.toFixed(2)}`);  
      }else if(dato == 6){
            const valor = (parseFloat(grado)-273.15);
            alert(`los ${grado} grados kelvin a celcius son: ${valor.toFixed(2)}`);  
      }
})
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
/*EJERCICIO4*/
const respuesta = document.getElementById('respuesta');

respuesta.addEventListener('click', ()=>{
      const names = document.getElementById('nombre').value;
      const secondName = document.getElementById('apellido').value;
      const materia = document.getElementById('actividad').value;
      parseInt(names); parseInt(secondName); parseInt(materia)
            if(names== 1 && secondName==2 && materia==6){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 2 && secondName==4 && materia==1 || materia==7){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 3 && secondName==5 && materia==2){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 4 && secondName==1 && materia==8){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 5 && secondName==3 && materia==3){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 6 && secondName==7 && materia==6){
                  alert("RESPUESTA CORRECTA!!")
            }else if(names== 7 && secondName==8 && materia==4){
                  alert("RESPUESTA CORRECTA!!")
            }else{
                  alert("RESPUESTA INCORRECTA¡¡")
            }
      
})
