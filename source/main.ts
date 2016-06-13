import * as $ from 'jquery';
import {Observable} from 'rxjs';


const refreshStream = Observable.fromEvent($('#refresh')[0],'click');

const requestStream = refreshStream
    .map(() => {
        const offset = Math.floor(Math.random()*500);
        return 'https://api.github.com/users?since='+offset;
    })
    .startWith('https://api.github.com/users');

const responseStream = requestStream.flatMap(requestUrl => Observable.fromPromise(<any>$.getJSON(requestUrl)));

responseStream.subscribe(response => console.log(response));