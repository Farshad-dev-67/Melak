import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + ' ' + token.split('"')[1])
      });
      return next.handle(cloned);
    } else {
      return next.handle(req).pipe(
        catchError(error => {
          if (error.status === 401 || error.status === 0 || error.name === 'HttpErrorResponse') {
            this.router.navigate(['login']);
          }
          return throwError(error);
        }));
    }
  }
}
