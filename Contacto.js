"use Strict";


let enviar=document.getElementById("enviar");

enviar.addEventListener("click", grabarDatos);

let arrDatosCliente=[];// generamos un arreglo para guardar los datos

function grabarDatos (){
    let nombre=document.getElementById("nombre").value;//traemos los datos del los inputs
    let apellido=document.getElementById("apellido").value;
    let celular=document.getElementById("celular").value;
    let correo=document.getElementById("correo").value;
    let comentario=document.getElementById("comentario").value;
    if( nombre=="" || apellido=="" || celular=="" || correo==""){//Valido que los campos no esten vacios.
        alert("Exepto comentarios, todos los campos son obligatorios. Vuelva a intentar...");
    }else{// si los datos no estan vaios lo grabo
        arrDatosCliente[0]=nombre;//cargamos arreglo
        arrDatosCliente[1]=apellido;
        arrDatosCliente[2]=celular;
        arrDatosCliente[3]=correo;
        arrDatosCliente[4]=comentario;
        console.log(`Nombre: ${arrDatosCliente[0]}, Apellido: ${arrDatosCliente[1]}, Celular: ${arrDatosCliente[2]}, Correo: ${arrDatosCliente[3]}, Comentario: ${arrDatosCliente[4]}`);
        let blob = new Blob ([arrDatosCliente], {type: "text/plain;charset=utf-8"});
        saveAs(blob,"Clientes.txt"); //libretia FileSaver.js//
        alert("Bienvenido a Borealis, Sus datos se Cargaron correctamente, Muchas Gracias ");// confirmo al usuario
    }
}