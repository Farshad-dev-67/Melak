import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TblProperties} from '../url-config/url-config';
import {RootObject} from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) {
  }

  // AdvertisingTypes(): Observable<any> {
  //   return this.http.get(environment.baseUrl + TblAdvertisingTypes.AdvertisingTypes);
  // }
  // getUsers(): Observable<TblProperty[]>{
  //   return this.http.get<TblProperty[]>(environment.baseUrl + TblUser.users);
  // }
  // getPropertyType(): Observable<TblProperty> {
  //   return this.http.get<TblProperty>(environment.baseUrl + TblPropertyTypes.PropertyTypes);
  // }
  getProperties(): Observable<RootObject>{
    return this.http.get<RootObject>(environment.baseUrl + TblProperties.Properties);
  }
}
