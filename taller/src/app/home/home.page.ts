import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import{Router,RouterModule} from'@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,RouterModule],
})
export class HomePage {
  constructor(private router: Router) {}

  irFibonacci(): void{
    this.router.navigateByUrl('fibonacci')
  }

  irFactorial(): void{
    this.router.navigateByUrl('factorial')
  }

  irPrimos(): void{
    this.router.navigateByUrl('primos')
  }

  irPares(): void{
    this.router.navigateByUrl('par')
  }

  irUnion(): void{
    this.router.navigateByUrl('union')
  }


}
