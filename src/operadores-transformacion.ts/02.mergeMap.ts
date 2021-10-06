import { fromEvent, interval, of } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";
const letras$ = of('a', 'b',  'c');

letras$.pipe(
    mergeMap( ( letra ) => interval(1000).pipe(
        map( i => letra + i ),
        take(3)
    ) )
)
// .subscribe({
//     next: val => console.log('next: ', val),
//     complete: () => console.log('Complete')
// }); 

const mouseDown$ = fromEvent(document, 'mousedown' );
const mouseup$ = fromEvent(document, 'mouseup' )
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ) )
)
.subscribe( console.log  );