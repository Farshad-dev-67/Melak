import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILogin} from './login.interface';
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
}
