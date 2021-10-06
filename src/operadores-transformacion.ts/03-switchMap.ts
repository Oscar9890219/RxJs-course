

import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, switchMap, pluck, mergeMap, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user-interface";
import { GithubUsersResp } from "../interfaces/github-users-interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers

const mostrarUsuarios = (users: GithubUser[] ) => {

    console.log(users);
    orderList.innerHTML = '';

    for(const usuario of users){
        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');

        anchor.href = usuario.html_url;
        anchor.href = 'Ver página';
        anchor.href = '_blanck';

        li.append( img );
        li.append( usuario.login,  ' ' );
        li.append( anchor );

        orderList.append(li);

    }

}


// Strems

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(        
        `https://api.github.com/search/users?q=${ texto }`
    )),
   pluck('items')
);//.subscribe( mostrarUsuarios );


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck( 'target', 'value' ),
    switchMap( texto => ajax.getJSON( url + texto ) )
).subscribe( console.log  )