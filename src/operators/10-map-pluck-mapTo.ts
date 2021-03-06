import { fromEvent, range } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";


// range(1,5).pipe(
//     map<number, number>( resp => {
//         return resp * 10;
//     })
// )
// .subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( event => event.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);


const mapTo$ = keyup$.pipe(
    mapTo(1)
);

keyup$.subscribe( console.log )
keyupCode$.subscribe( code => console.log('map: ', code ) );
keyupPluck$.subscribe( code => console.log('pluck: ', code ) );
mapTo$.subscribe( mapTo => console.log('mapTo: ', mapTo) );

