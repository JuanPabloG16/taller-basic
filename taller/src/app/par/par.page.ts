import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-par',
  templateUrl: './par.page.html',
  styleUrls: ['./par.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ParPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
