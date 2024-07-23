"use Strict";


let enviar=document.getElementById("enviar");
enviar.addEventListener("click", grabarDatos);

let arrDatosCliente=[];

function grabarDatos (){
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let celular=document.getElementById("celular").value;
    let correo=document.getElementById("correo").value;
    let comentario=document.getElementById("comentario").value;
    arrDatosCliente[0]=nombre;
    arrDatosCliente[1]=apellido;
    arrDatosCliente[2]=celular;
    arrDatosCliente[3]=correo;
    arrDatosCliente[4]=comentario;
    console.log(`Nombre: ${arrDatosCliente[0]}, Apellido: ${arrDatosCliente[1]}, Celular: ${arrDatosCliente[2]}, Correo: ${arrDatosCliente[3]}, Comentario: ${arrDatosCliente[4]}`);
    let blob = new Blob ([arrDatosCliente], {type: "text/plain;charset=utf-8"});
    saveAs(blob,"Clientes.txt"); //libretia FileSaver.js//
}