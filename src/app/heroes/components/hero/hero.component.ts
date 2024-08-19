import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iron Man';
  public age: number = 45;

  public get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  public changeHero(nombre:string):void{
    //throw 'Metodo no implementado';
    this.name=nombre;
  }

  public changeAge(edad:number):void{
    this.age=edad;
  }

  public resetForm():void{
    this.name='iron man';
    this.age=45;
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }
}
