import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogin, IRegister} from './login.interface';
import {Observable} from 'rxjs';
import {TblAdmins} from '../../core/url-config/url-config';
import {environment} from '../../../environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  login(username: string, password: string): Observable<ILogin> {
    return this.httpClient.post<ILogin>(environment.baseUrl + TblAdmins.Login, {username, password});
  }

  register(
  name: string,
  lastName: string,
  userName: string,
  password: string
  ): Observable<IRegister> {
    const body = {
      name,
      lastName,
      userName,
      password
    };
    return this.httpClient.post<IRegister>(environment.baseUrl + TblAdmins.Register, body);
  }
}
