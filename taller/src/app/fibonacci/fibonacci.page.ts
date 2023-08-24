import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FibonacciPage implements OnInit {

  num: number = 0;
  location: number = 0; // Inicialización en la declaración de la clase
  sequence: number[] = []; // Agrega una nueva propiedad para almacenar la secuencia

  constructor() { 
    this.location = 0; // Asignación en el constructor
  }

  ngOnInit() {
  }

  calcular() {
    let a = 0;
    let b = 1;
    let sum = 1;
    let index = 2;
    this.sequence = [a, b]; // Inicializa la secuencia con los primeros dos números

    while (sum < this.num) {
      sum = a + b;
      a = b;
      b = sum;
      index++;
      this.sequence.push(sum); // Agrega el siguiente número a la secuencia
    }
  
    if (sum === this.num) {
      this.location = index;
    } else {
      this.location = -1; // Si el número no está en la secuencia de Fibonacci
    }
  }
}