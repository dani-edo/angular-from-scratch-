import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EchoService {
   constructor(private httpClient: HttpClient) {}

   makeCall(): Observable<any> {
       return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts/1');
   }
}