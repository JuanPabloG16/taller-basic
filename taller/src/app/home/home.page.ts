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

  irPagina(pagina: string): void {
    this.router.navigateByUrl(pagina);
  }
}
