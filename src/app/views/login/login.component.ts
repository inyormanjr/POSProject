import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  IsDone = true;
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  login() {
      this.IsDone = false;
      const result = this.authService.login(this.loginModel);
      console.log(result);
      if (result) {
        this.IsDone = true;
        this.alertify.message('success');
      } else {
        this.IsDone = true;
      }
  }

}
