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

}
