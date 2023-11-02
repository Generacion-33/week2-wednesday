//Bucle FOR. /ESTRUCTURA DE CONTROL/


/**
 * Un cliclo 'for' en JS, es una estructura control que se utiliza para ejecutar un bloque de codifo repetidamente, hasta que se cumpla un condicion. (ME ESTARA DANDO TRUE O FALSE, dicha condicion)
 */


/**
 * SINTAXIS
 * for(inicializacion; condicion; operacion){
 *  //cuerpo del bucle = codigo
 * }
 */



// vamos a desmenuzarlo. 
/**
 * 1-(inicializacion): se ejecutara una unica vez al inicio del bucle
 * 2-(condicion): para cada iteracion, estamos comprobando si cumple o no la condicion
 * 3- (codigo): se ejcutara, una y otra vez siempre y cuando la condicion sea true
 * 4- (operacion): se ejecutara luego de que se haya ejecutado el bloque del bucle (el codigo)
 */

for (let inicializacion = 1; inicializacion <= 10; inicializacion++) {
  console.log(inicializacion);
}

console.log('--el cero como condicion false--');

for (let inciarEn = 10; inciarEn; inciarEn--) {
  console.log(inciarEn); // recordar que el cero se evalua como false
}

console.log('--ejemplo de usuario--');

const usuario = [
  {
    nombre: "Carlos",
    edad: 20
  },
  {
    nombre: 'Roberto',
    edad: 25
  },
  {
    nombre: "Jimmy",
    edad: 40
  }
]

const usuarioFiltrados = []
console.log(usuarioFiltrados);

//quiero quedame con los usuarios menores de 30 años y mayores a 20 (roberto)

//usuarios que tienen menor que 30 : carlos y roberto

//usuarios que tienen mayores a 20 : jimmy, roberto

//carlos -> usuario[0].edad
//Roberto -> usuario[1].edad
//Jimmy -> usuario[2].edad

for (let i = 0; i < usuario.length; i++) {
  if (usuario[i].edad > 20 && usuario[i].edad < 30) {
    usuarioFiltrados.push(usuario[i])
  }
}

console.log(usuarioFiltrados);

//bucle infinito

for (let i = 0; false; i++) {
  console.log(i);
}

//for con break
console.log('--for con break--');

for (let num3 = 1; num3 < 20; num3++) {
  if (num3 === 8) break
  console.log(num3);
}


//FOR OF
console.log('--for of, con const--');

let array1 = [10, 20, 30]

//cuando la variable no se modifica, puedo hacer el for of, con const
for (const value of array1) {
  console.log(value);
}
//value = 10

//value = 20

//value = 30


console.log('--for of, con let--');

//cuando la variable se reasigna, debo hacerlo con let
for (let value of array1) {
  console.log(value += 6);
}

//value = 10 + 6

//value = 20  + 6

//value = 30  + 6

