import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public  title:string = 'angular 01';
  public counter:number = 10

increaseBy():void{
  this.counter += 1;

}
decrementBy():void{
  this.counter += -1;

}

}
