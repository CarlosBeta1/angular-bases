import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>
     <span>Contador: {{contador}}</span>
    </p>

    <button (click)="increseBy(+1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increseBy(-1)">-1</button>

  `
})
export class CounterComponent {

  public contador: number = 10;

  increseBy( value: number): void{

      this.contador += value;

  }

  reset(){
    this.contador = 10;
  }

}
