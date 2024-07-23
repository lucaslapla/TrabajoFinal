"use Strict";

let lista=document.getElementById("lista");

const productos= ["Pan","Facturas","Masitas","Leche","Huevo","Aceite","Harina","Carne","Pollo","Cerveza","Gaseosa","Jugo","Detergente","Cloro","Desodorante","jabonRopa","Shampoo","CremaEnjuague","Vaso","Cuchillo","Tenedor","ResmaHojas","Mayonesa","Sabora"];
const precios=  [ 2000,    4600,       2500,   1500,   1500,    3000,    1000,   8000,  5000,      1500,     1500,  300 ,        3000,   1500,         1500,   3600,     3000,           3000,  1500,      500 ,     500 ,     8000,      1300,     800 ];
const stock  =  [   10,      10,        10,       8,     5,        6,       5,     15,     5,       20 ,       15,   50 ,          10,      15,          5,       7,        5,              6,     12,       12,       12,      15,         8,        6];

function crearLista (arrayProductos,arrayPrecios,arrayStock){
    for(let i=0;i<arrayProductos.length;i++){
        let li=document.createElement("li");
        let text=document.createTextNode(`Nombre: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]} - Stock: ${arrayStock[i]}`);
        li.appendChild(text);
        lista.appendChild(li);
        crearInput(li,i,arrayStock[i]);// llama funcion crear input para cada lemeneto
    }
}



function crearInput (li,i,arrayStock){     
    const input = document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("id","input"+i); 
    input.setAttribute("min","0");
    input.setAttribute("max",(arrayStock+1));//uso un elemento mas, colo para validar segun consigna.
    input.setAttribute("value","0");
    input.setAttribute("input","myinput"+i);
    li.appendChild(input);
}
crearLista(productos,precios,stock);

//Genero un boton para la compra
let comprar=document.getElementById("comprar");
let button=document.createElement("button");
button.setAttribute("class","button");
button.textContent = "Comprar";
comprar.appendChild(button);
comprar.addEventListener('click', validacionStock); //primero validamos, luego llamos funcion de compra;

function validacionStock(){
    for(let i=0; i<productos.length;i++){
        if((document.getElementById("input"+i).value)>stock[i]){
            alert("lo sentimos mucho no has Stock Suficiente, se descontara un elemnto a : "+ productos[i]);
            (document.getElementById("input"+i).value)=(document.getElementById("input"+i).value)-1;
        }
    }
    comprarProductos();
}

function descuento30 (i){ //Promo descuento 30% en productos Seleccionados del Index.html//
    let precioDescuento=precios[i];
    if(productos[i]=="Leche" || productos[i]=="Desodorante" || productos[i]=="Detergente" || productos[i]=="ResmaHojas" || productos[i]=="jabonRopa"){
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
        precioFinal=totalCompra-(totalCompra*0.2);
        alert ("El total de la compra es: " + precioFinal +" $ Con un 20% de Descuento por pago Contado" );
    }else if(formaPago==2){
        precioFinal=totalCompra-(totalCompra*0.15);
        alert ("El total de la compra es: " + precioFinal +" $ Con un 15% de Descuento por pago con Debito" );
    }else if(formaPago==3){
        precioFinal=totalCompra;
        alert ("El total de la compra es: " + precioFinal +" $ sin recargo en un pago con tarjeta de Credito" );
    }else{
        precioFinal=(totalCompra*1.4);
        alert ("El total de la compra es: " + precioFinal +" $ Con un 40% de Recargo en 12 Pagos Con Credito" );
    }    
}z