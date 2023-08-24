import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-union',
  templateUrl: './union.page.html',
  styleUrls: ['./union.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UnionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
