import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Viuda Negra'];
  public lastHeroRemove?: string;

  removeLastHero(): void{

    this.lastHeroRemove = this.heroeNames.pop();

  }
}
