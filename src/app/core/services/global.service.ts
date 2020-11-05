import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TblAdvertisingTypes} from '../url-config/url-config';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) {
  }

  AdvertisingTypes(): Observable<any> {
    return this.http.get(environment.baseUrl + TblAdvertisingTypes.AdvertisingTypes);
  }
}
