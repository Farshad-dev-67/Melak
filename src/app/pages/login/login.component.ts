import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ILogin} from './login.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  singUpLoginForm: FormGroup;
  body: ILogin;

  constructor(private loginService: LoginService,
              private router: Router) {
    import('../../../assets/js/login-general.js').then();
  }

  ngOnInit(): void {
    this.singUpLoginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
  }

  OnSubmitLogin(): void {
    this.loginService.login(this.singUpLoginForm.get('username').value, this.singUpLoginForm.get('password').value)
      .subscribe((res) => {
        if (res.token){
          localStorage.setItem('token', JSON.stringify(res.token));
          this.router.navigate(['dashboard']);
        }
      });
  }

}
