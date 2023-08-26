import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-par',
  templateUrl: './par.page.html',
  styleUrls: ['./par.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ParPage implements OnInit {
  userNumber: number = 0;
  selectedOption: 'pares' | 'impares' = 'pares';
  resultArray: number[] = [];
  constructor(private router: Router) {}
  ngOnInit() {}
  calculate() {
    this.resultArray = [];
    const start = this.selectedOption === 'pares' ? 2 : 1; 
    for (let i = start; i <= this.userNumber; i += 2) {
      this.resultArray.push(i);
    }
  }
  goToHomePage() {
    // Navegar de regreso a la página principal
    this.router.navigate(['home']); 
  }

}
