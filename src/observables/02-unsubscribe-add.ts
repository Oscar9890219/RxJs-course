import { Observable, Observer }  from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {

    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado: ')
    

}; 

const intervalo$ = new Observable<number>(subscriber => {

    // crear un contador 1,2,3,4,...

    let counter = 0;

    const interval = setInterval(() => {


        counter++;
        subscriber.next( counter );
        console.log(counter);

    }, 1000);


    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

});


const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

subs1.add( subs2 )
     //.add( subs3 );


setTimeout(() => {
    
        subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()

    console.log('Completado timeout');

}, 3000);
