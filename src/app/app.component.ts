import { Component, OnInit } from '@angular/core';
import { EchoService } from './services/echo.service';
import { Observable } from 'rxjs';

@Component({
 selector: 'my-app',
 templateUrl: `app.component.html`,
 styleUrls: ['./app.component.css']
})
export class AppComponent {
   public response: Observable<any>;

   constructor(private echoService: EchoService) {}

   getData(): void {
       this.response = this.echoService.makeCall();
   }
}