// Podemos usar el método Array.filter() para encontrar los elementos cumplan con cierta condición. 

let arreglo = [10, 11, 3, 20, 5];

let mayorQueDiez = arreglo.filter(element => element > 10);

console.log(mayorQueDiez) // devuleve: 11, 20