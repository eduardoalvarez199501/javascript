console.log("hola mundo")

let nombre=1;
let nombre_2 = "hola";
const version_1 ="tralala";
/**
 * crear una variable y darle un valor se le llama asignacion 
 * las variables pueden ser reasignadas 
 * = / operador asignacion 
 * para usar ls variables no deber ir en "" al llamarlas 
 * palabras reservadas , usadas por el lenguaje de programacion y ya n se pueden asignar o utilizar en otro lado
 * 
 */

console.log(nombre);
console.log(nombre_2);
//error
//console.log(nombre_3);
//version_1="oye mi amor"
const edad = Number(prompt("ingresa tu edad"));
console.log("ola "+edad);
// const edad2 = prompt("ingresa tu edad",20);

const bithYear = Number(prompt("ingresa tu pecha de ncimientp"));
let birthplus10 = Number(bithYear)+10;
console.log("birthplus10 "+birthplus10);

// > "mayor que" 2 > 1 = true // operadores logicos , hacer operaciones que su resltado sea verdadero o falso
/** 
 * 2 > 1 = true
 * 2 > 2 = false
 * 
 * "menor que " <
 * 1 < 1 = false
 * 1 < 5 = true
 * 
 *  <= menor o igual que || >= mayor o igual que || == igual a 
 * 
 * distinto o 
 * 5 != 4  = true 
 * 5 != 5 = false 
 * 99 != 100 = true 
 * 
 * negacion
 * !verdadero = false
 * !false = verdadero
 * 
*/

if(edad >18)
    {
        alert("rico");
    }else
        {
            alert("ilegal");
        }