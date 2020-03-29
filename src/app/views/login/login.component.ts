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
      console.log(this.loginModel);
      this.authService.login(this.loginModel).subscribe(result => {
        this.alertify.message(localStorage.getItem('token'));
        this.IsDone = true;
      }, error => {
          this.loginModel = {};
          this.IsDone = true;
          this.alertify.error(error);
      }, () => {
        this.IsDone = true;
        console.log('test');
      });
  }

}
