import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


export class HeroComponent {

  public age:number = 45;
  public name:string = "Ironman";


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return ` ${this.name} - ${this.age}`
  }

  changeHero():void{
    // TODO:

    this.name= "spiderman"

    throw 'metodo no implementado'

  }
  changeAge():void{
    this.age = 25
  }

}
