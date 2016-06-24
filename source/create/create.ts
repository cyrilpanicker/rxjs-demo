import {Observable} from 'rxjs';

export function run(){
    
    const stream:Observable<any> = Observable.create(observer => {
        setInterval(() => observer.next(Math.ceil(Math.random()*10)),1000);
        setTimeout(() => observer.complete(),5000);
    });
    
    const subscription = stream.subscribe(
        value => console.log(value),
        error => console.log(error),
        () => console.log('completed')
    );
    
}