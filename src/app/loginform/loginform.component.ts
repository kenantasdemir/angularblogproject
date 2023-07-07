import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  showPassword:boolean = false;

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }

}
