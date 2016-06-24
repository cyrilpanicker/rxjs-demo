import {Observable} from 'rxjs';

export function run() {
    const stream = Observable.timer(1000,1000);
    stream.subscribe(value => console.log(value));  
}