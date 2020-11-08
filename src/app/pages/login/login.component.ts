import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ILogin, IRegister} from './login.interface';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  singUpLoginForm: FormGroup;
  singUpRegisterForm: FormGroup;
  body: ILogin;

  constructor(private loginService: LoginService,
              private router: Router,
              private toasterService: ToastrService) {
    import('../../../assets/js/login-general.js').then();
  }

  ngOnInit(): void {
    this.singUpLoginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.singUpRegisterForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  OnSubmitLogin(): void {
    if (this.singUpLoginForm.invalid) {
      return;
    }
    this.loginService.login(this.singUpLoginForm.get('username').value, this.singUpLoginForm.get('password').value)
      .subscribe((res) => {
          if (res.token) {
            localStorage.setItem('token', JSON.stringify(res.token));
            this.router.navigate(['dashboard']);
          }
        },
        (() => {
          this.toasterService.error('نام کاربری یا رمز عبور اشتباه می باشد');
        })
      );
  }

  OnSubmitRegister(): void {
    if (this.singUpRegisterForm.invalid) {
      return;
    }
    this.loginService.register(
      this.singUpRegisterForm.get('firstName').value,
      this.singUpRegisterForm.get('lastName').value,
      this.singUpRegisterForm.get('email').value,
      this.singUpRegisterForm.get('password').value).subscribe((res) => {});
  }
}
