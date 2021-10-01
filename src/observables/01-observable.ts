import { Observable, Observer, Subscriber }  from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {

    next: value => console.log('siguiente next', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Compledadoe ')
    

}

const obs$ = new Observable<string>( subs => {


 subs.next('Hola');
 subs.next('Hola mundo');

 // error

//  const a = undefined;
//  a.name = 'oscar';

 subs.complete();

 subs.next('Hola mundo');


});


obs$.subscribe( observer );


// obs$.subscribe(

//     valor => console.log('next: ' + valor),
//     error => console.warn('error: ' + error),
//     () => console.info('Completado')

// );