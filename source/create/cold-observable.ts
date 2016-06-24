import {Observable} from 'rxjs';

export function run (){
 
    const coldStream = Observable.interval(1000);

    setTimeout(() => {
        coldStream.subscribe(value => console.log('observer - 1 : '+value));
    },1000);

    setTimeout(()=>{
        coldStream.subscribe(value => console.log('observer - 2 : '+value));
    },5000);   
    
}