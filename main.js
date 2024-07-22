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
        crearbuttonInput(li,i,arrayStock[i]);
    }
}

function crearbuttonInput (li,i,arrayStock){
    const button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("id","comprar");
    button.setAttribute("button", "myboton"+i);
    button.textContent = "comprar";
    
    const input = document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("id","input1");
    input.setAttribute("min","0");
    input.setAttribute("max",arrayStock);
    input.setAttribute("value","0");
    const lista = document.getElementById('lista');
    li.appendChild(input);
    li.appendChild(button);
}

crearLista(productos,precios,stock);

