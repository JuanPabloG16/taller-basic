import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-union',
  templateUrl: './union.page.html',
  styleUrls: ['./union.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UnionPage implements OnInit {

  setA = '';
  setB = '';
  selectedOperation = 'intersection';
  result = '';

  ngOnInit() {
    
  }
  constructor(private router: Router) {}

  performOperation() {
    const arrayA = this.setA.split(',').map(item => item.trim());
    const arrayB = this.setB.split(',').map(item => item.trim());

    switch (this.selectedOperation) {
      case 'intersection':
        this.result = arrayA.filter(item => arrayB.includes(item)).join(', ');
        break;
      case 'union':
        this.result = Array.from(new Set([...arrayA, ...arrayB])).join(', ');
        break;
      case 'notInB':
        this.result = arrayA.filter(item => !arrayB.includes(item)).join(', ');
        break;
      case 'notInA':
        this.result = arrayB.filter(item => !arrayA.includes(item)).join(', ');
        break;
      default:
        this.result = '';
    }
  }
  goToHomePage() {
    // Navegar de regreso a la página principal
    this.router.navigate(['home']); 
  }
}
