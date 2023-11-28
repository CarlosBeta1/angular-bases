import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'carlosMan';
  public age: number = 24;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name} - ${ this.age }`;
  }

  changeHero(): void{
    this.name = 'Spiderman';

  }

  changeAge(): void{
    this.age = 30;

  }


  resetForm(): void{
    this.name= 'carlosMan';
    this.age = 24;
  }


}
