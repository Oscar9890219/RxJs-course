import { asyncScheduler, of, range } from 'rxjs';

const src$ = range(1,5, asyncScheduler);

console.log( 'inicio' );

src$.subscribe( console.log);

console.log( 'fin' );