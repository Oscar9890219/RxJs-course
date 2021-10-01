import { async, from, of } from "rxjs";

/**
 * of =  Toma argumentos y genera una secuencia de valores
 * from =  Array, promise, itereble, observable
 * 
 */

const observer = {
  next: val => console.log('next: ', val),
  error: () => console.log('Complete')
}


const miGenerador = function*(){

  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;

}

const miIterable = miGenerador();

// for( let id of miIterable ){
//   console.log(id);
// }

from( miIterable ).subscribe( observer );



//const src$ = from( [1,2,3,4,5] );
//const src$ = of( ...[1,2,3,4,5] );

//const src$ = from( 'Oscar' );

const src$ = from( fetch( 'https://api.github.com/users/klerith' ) );

// src$.subscribe( async (resp) => {
//   console.log(resp);


//  const dataResp = await resp.json();

// console.log(dataResp);

// });