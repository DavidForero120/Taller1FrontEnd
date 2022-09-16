const form = document.getElementById('Jvalidaciones')
const  campos = document.querySelectorAll('#Jvalidaciones input');

/*Crear las expresiones regulares*/
const validacion = {
    documento: /^[0-9]{3-11}$/,
    nombre: /^[A-Za-z\s]{4-40}$/,
    apellido: /^[A-Za-z\s]{4-40}$/,
    correo: /^[A-Za-z.0-9_-]+@[A-Za-z0-9_-]+\.[A-Za-z.0-9]{10,}$/,
    contrasena:/^{4-20}$/
}

const iniciar ={
    documento: false,
    nombre:false,
    apellido:false,
    correo:false,
    contrasena: false
}
form.addEventListener('submit', e =>{
    e.preventDefault();
 })

const validarCampos=(e)=>{
    console.log(e.target.name);
    /*Segun el input mostrar el valor*/
    switch (e.target.name) {
        case "docu":
            console.log("sirve");
            if(validacion.documento.test(e.target.value)){
                document.getElementById('documento').classList.replace('incorrect','correct');
                
        }else{
            document.getElementById('documento').classList.replace('correct','incorrect');
        }
            
        break;

        case "nombre":
            
        break;
        case "apellido":
            
        break;
        case "correo":
            
        break;
        case "password":
            
        break;

    }
}

const validarInput=(validacion, input, grupo)=>{
    if(validacion.test(input.value)){
        
    }

}

/*generar evento submit para el formulario*/

campos.forEach((campo)=>{
    campo.addEventListener('keyup', validarCampos);
    campo.addEventListener('blur', validarCampos);
})
