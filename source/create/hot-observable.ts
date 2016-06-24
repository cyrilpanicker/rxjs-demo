import {Observable} from 'rxjs';

export function run (){
 
    const hotStream = Observable.interval(1000).publish();
    hotStream.connect();//starts the stream

    setTimeout(() => {
        hotStream.subscribe(value => console.log('observer - 1 : '+value));
    },3000);

    setTimeout(()=>{
        hotStream.subscribe(value => console.log('observer - 2 : '+value));
    },5000);   
    
}