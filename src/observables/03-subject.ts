import { interval, Observable, Observer, Subject }  from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {

    next: value => console.log('Next: ', value),
    error: error => console.warn('Error: ', error),
    complete: () => console.info('Completado: ')
    

}; 

const intervalo$ = new Observable<number>( subs => {
  const intervalRef =  setInterval(  
      () => subs.next(Math.random() ), 1000
  );


  return () => {

    clearInterval( intervalRef );
    console.log('Intervalo destruido');
  } 

});

/**
 *  1 - Casteo múltiple 
 *  2 - Tambien es un observer
 *  3 - Next, error and complete
 * 
 */
const subject$ = new Subject();

const subcription = intervalo$.subscribe( subject$ );


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout(() => {
    
    subject$.next(10);

    subject$.complete();

    subcription.unsubscribe();

}, 3500);

// const subs1 = intervalo$.subscribe( rnd => console.log( 'subs1', rnd ) );
// const subs2 = intervalo$.subscribe( rnd => console.log( 'subs2', rnd ) );