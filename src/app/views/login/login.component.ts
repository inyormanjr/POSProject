import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  IsDone = true;
  loginForm: FormGroup;
  constructor(private authService: AuthService, private alertify: AlertifyService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  manageSpinner() {
    this.IsDone = !this.IsDone;
  }

  login() {
      this.manageSpinner();
      this.loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(this.loginModel).then(() => {
        this.manageSpinner();
        if (this.authService.token != null) {
          this.router.navigate(['/store']);
        }
      });
  }

}
