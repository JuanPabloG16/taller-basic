import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.page.html',
  styleUrls: ['./fibonacci.page.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FibonacciPage implements OnInit {
  userInput: number = 0;
  fibonacciSeries: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
   
  }

  generateFibonacci() {
    if (this.userInput <= 0) {
      this.fibonacciSeries = [];
      return;
    }
//[0.1.3]
    this.fibonacciSeries = [0, 1];
    while (this.fibonacciSeries.length < this.userInput) {
      const nextValue =
        this.fibonacciSeries[this.fibonacciSeries.length - 1] +
        this.fibonacciSeries[this.fibonacciSeries.length - 2];
      this.fibonacciSeries.push(nextValue);
    }
  }
  goToHomePage() {
    // Navegar de regreso a la página principal
    this.router.navigate(['home']); 
  }
}