import { fromEvent } from "rxjs";
import { takeWhile, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({ x, y }) => ({ x, y })),
    //takeWhile(  ({ y }) => y <= 150 )

    // the last param shows the value that break with the condition
    takeWhile(  ({ y }) => y <= 150, true )
).subscribe( {
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
});

