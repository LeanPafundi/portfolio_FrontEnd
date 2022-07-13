// Usamos el método Array.find() para encontrar el primer elemento que cumple cierta condición. 
// Tal como el método anterior, toma un Callback como argumento y devuelve el primer elemento 
// que cumpla la condición establecida. 

let arreglo = [10, 11, 3, 20, 5];

let existeElementoMayorQueDiez = arreglo.find(element => element > 10);

console.log(existeElementoMayorQueDiez) // devuelve: 11