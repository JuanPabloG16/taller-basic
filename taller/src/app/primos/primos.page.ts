import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.page.html',
  styleUrls: ['./primos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrimosPage implements OnInit {

  userNumber:number = 0; // Inicializa con un valor predeterminado

  primeNumbers: number[] = [];

  constructor(private router: Router) {}

  
  ngOnInit(): void {}

  calculatePrimes() {
    this.primeNumbers = [];

    for (let num = 2; num < this.userNumber; num++) {
      if (this.isPrime(num)) {
        this.primeNumbers.push(num);
      }
    }
  }

  isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  goToHomePage() {
    // Navegar de regreso a la página principal
    this.router.navigate(['home']); 
  }

  
}
