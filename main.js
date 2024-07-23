"use Strict";

let lista=document.getElementById("lista");

const productos= ["Pan","Facturas","Masitas","Leche","Huevo","Aceite","Harina","Carne","Pollo","Cerveza","Gaseosa","Jugo","Detergente","Cloro","Desodorante","jabon","Shampoo","CremaEnjuague","Vaso","Cuchillo","Tenedor","Cuchara","Mayonesa","Sabora"];
const precios=  [ 2000,    3000,       2500,   1500,   1500,    3000,    1000,   8000,  5000,      1500,     1500,  300 ,        3000,   1500,         1500,   2000,     2000,           3000,  1500,      300 ,     300 ,     300,      1300,     800 ];
const stock  =  [   10,      10,        10,       8,     5,        6,       5,     15,     5,       20 ,       15,   50 ,          10,      15,          5,       7,        5,              6,     12,       12,       12,      15,         8,        6];

function crearLista (arrayProductos,arrayPrecios,arrayStock){
    for(let i=0;i<arrayProductos.length;i++){
        let li=document.createElement("li");
        let text=document.createTextNode(`Nombre: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]} - Stock: ${arrayStock[i]}`);
        li.appendChild(text);
        lista.appendChild(li);
        crearInput(li,i,arrayStock[i]);
    }
}
function crearInput (li,i,arrayStock){     
    const input = document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("id","input"+i); 
    input.setAttribute("min","0");
    input.setAttribute("max",arrayStock);
    input.setAttribute("value","0");
    input.setAttribute("input","myinput"+i);
    li.appendChild(input);
}
crearLista(productos,precios,stock);

let comprar=document.getElementById("comprar");
let button=document.createElement("button");
button.setAttribute("class","button");
button.textContent = "Comprar";
comprar.appendChild(button);
comprar.addEventListener('click', comprarProductos);

function comprarProductos (){
    let totalCompra=0;
    for(let i=0; i<productos.length;i++){
        let cantidades=(document.getElementById("input"+i).value);
        totalCompra+=cantidades*precios[i];
        console.log(totalCompra);
    }
    alert ('El total de la compra es: ' + totalCompra +' $ ');
}