import {Observable} from 'rxjs';

export function run(){

    const clickStream = Observable.fromEvent(document.getElementById('refresh'),'click');
    
    clickStream.subscribe(
        (event:Event) => console.log(event.type)
    );   
}