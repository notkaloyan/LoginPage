import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(public authernticationService: AuthService){
  }

  logout(){
    this.authernticationService.logout();
  }

}
