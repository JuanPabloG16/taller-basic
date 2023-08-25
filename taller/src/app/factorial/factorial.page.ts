import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.page.html',
  styleUrls: ['./factorial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FactorialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numero: number = 0; // Inicializamos la propiedad numero con un valor predeterminado
  factorial: number | null = null; // Usamos el operador de union para permitir valores null

  calcularFactorial(): void {
    let result = 1;
    for (let i = 1; i <= this.numero; i++) {
      result *= i;
    }
    this.factorial = result;
  }

}







