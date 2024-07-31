"use Strict";

let lista=document.getElementById("lista");

const dirImagenes= ["./Pan.jfif","./Facturas.jfif","./Masitas.jfif","./Leche.jpg","./Huevos.jfif","./Aceite.jfif","./Harina.jfif","./Carne.jfif","./Pollo.jfif","./Cerveza.jfif","./Gaseosas.jfif","./Jugo.jfif","./Detergente.jpg","./Cloro.jfif","./DesodoranteP.jpg","./Jabon.jfif",
                "./Shampoo.jfif","./CremaEnjuague.jfif","./Vaso.jfif","./Cuchillo.jfif","./Tenedor.jfif","./Hojas.jpg","./Mayonesa.jfif","./Mostaza.jfif"];                                                                                                                      
const productos= ["Pan","Facturas","Masitas","Leche","Huevo","Aceite","Harina","Carne","Pollo","Cerveza","Gaseosa","Jugo","Detergente","Cloro","Desodorante","jabon Ropa","Shampoo","Crema Enjuague","Vaso","Cuchillo","Tenedor","Resma Hojas","Mayonesa","Mostaza"];
const precios=  [ 2000,    4600,       2500,   1500,   1500,    3000,    1000,   8000,  5000,      1500,     1500,  300 ,        3000,   1500,         1500,   3600,     3000,           3000,  1500,      500 ,     500 ,     8000,      1300,     800 ];
const stock  =  [   10,      10,        10,       8,     5,        6,       5,     15,     5,       20 ,       15,   50 ,          10,      15,          5,       7,        5,              6,     12,       12,       12,      15,         8,        6];

function crearLista (dirimagenes,arrayProductos,arrayPrecios,arrayStock){
    for(let i=0;i<arrayProductos.length;i++){
        let li=document.createElement("li");
        let text=document.createTextNode(`${arrayProductos[i]}: $${arrayPrecios[i]}`);
        const img= document.createElement("img");
        img.src=dirimagenes[i];
        img.width=170;
        img.height=170;
        
        li.appendChild(img);//asigno la imagen dentro de la lista.
        li.appendChild(text);//asigno el texto(producto:$Precio) a la lista
        lista.appendChild(li);//Creolista con imagen, texto e input por cada producto.
        crearInput(li,i,arrayStock[i]);// llama funcion crear input para cada lemeneto. dentro de la lista
    }
}


function crearInput (li,i,arrayStock){     
    const input = document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("id","input"+i); 
    input.setAttribute("min","0");//para no balidar stock negativo, directamente lo pongo como minimo.
    input.setAttribute("max",(arrayStock+1));//uso un elemento mas, colo para validar segun consigna.
    input.setAttribute("value","0");
    input.setAttribute("input","myinput"+i);
    li.appendChild(input);
}

crearLista(dirImagenes,productos,precios,stock);

//Genero un boton para la compra
let comprar=document.getElementById("comprar");
let button=document.createElement("button");
button.setAttribute("class","button");
button.textContent = "Comprar";
comprar.appendChild(button);
comprar.addEventListener('click', validacionStock); //primero validamos, luego llamos funcion de compra;

function validacionStock(){
    let contadorFueraStock=0;
    for(let i=0; i<productos.length;i++){
        if((document.getElementById("input"+i).value)>stock[i]){
            alert("Lo sentimos mucho no has Stock Suficiente, se descontara un elemnto a : "+ productos[i]);
            document.getElementById("input"+i).value=((document.getElementById("input"+i).value)-1);
            contadorFueraStock++
        }
    }
    if (contadorFueraStock==0){
        comprarProductos(); //luego de validar llamamos a la funcion de comprarProducto
    }else{
        alert("Por falta de Stock se limitaron cantidades, ejecute nuevamente la compra si esta de acuerdo, Muchas Gracias");
    }
    
}

function descuento30 (i){ //Promo descuento 30% en productos Seleccionados del Index.html//
    let precioDescuento=precios[i];
    if(productos[i]=="Leche" || productos[i]=="Desodorante" || productos[i]=="Detergente" || productos[i]=="ResmaHojas"){
        precioDescuento=precios[i]-(precios[i]*0.3);
        console.log("descuento en "+ productos[i]+" 30% ");
    }
    return precioDescuento;
}


//funcion recorre los productos y los multiplica por la cantidad., 
function comprarProductos (){
    let totalCompra=0;
    for(let i=0; i<productos.length;i++){
        let cantidades=(document.getElementById("input"+i).value);
        totalCompra+=cantidades * (descuento30(i));     
    }
    formaDePago(totalCompra); //llamo la funcion para aplicar descuento por sistema de pago.   
}


function formaDePago(totalCompra){ //Se hace Descuento o recargo segun corresponda
    let formaPago=document.getElementById("formaPago").value;
    let precioFinal
    if (formaPago==1){
        precioFinal=totalCompra-(totalCompra*0.20);
            Swal.fire({
                title: "Resultado de la Compra",
                text:"El total de la compra es: $" + precioFinal +"  Con un 20% de Descuento por pago Contado",
                icon:"susses",
                confirmButtonText: 'Aceptar'
             });
    }else if(formaPago==2){
        precioFinal=totalCompra-(totalCompra*0.10);
        Swal.fire({
            title: "Resultado de la Compra",
            text:"El total de la compra es: $" + precioFinal +"  Con un 10% de Descuento por pago con Debito",
            icon:"susses",
            confirmButtonText: 'Aceptar'
         });
    }else if(formaPago==3){
        precioFinal=totalCompra;
        Swal.fire({
            title: "Resultado de la Compra",
            text:"El total de la compra es: $" + precioFinal +"  sin recargo en un pago con tarjeta de Credito",
            icon:"susses",
            confirmButtonText: 'Aceptar'
         });
    }else{
        precioFinal=Math.trunc(totalCompra*1.4);//Le saco los decimales para mejor entendimiento.
        let cuota=Math.trunc(precioFinal/12);
        Swal.fire({
            title: "Resultado de la Compra",
            text:"El total de la compra es: $" + precioFinal +"  Con un 40% de Recargo en 12 Pagos Con Credito, y las cuotas seran de: $"+cuota,
            icon:"susses",
            confirmButtonText: 'Aceptar'
         });
    
    }    
}