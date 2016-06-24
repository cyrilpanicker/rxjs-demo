import {Observable} from 'rxjs';

export function run (){
    const stream = Observable.from([1,2,3,4,5]);
    const mappedStream = stream.map(value => value*2);
    mappedStream.subscribe(console.log.bind(console));
}