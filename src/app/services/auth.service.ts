import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  constructor(private router: Router) {}

  login(username: string, password: string): Observable<any> {
    if (username === 'admin' && password === '1234') {
      return of({ token: 'fake-token-1234' }).pipe(
        delay(1000),
        tap(() => this.authenticated = true)
      );
    } else {
      return throwError(() => new Error('Credenciales incorrectas')).pipe(delay(1000));
    }
  }

  logout(): void {
    this.authenticated = false;
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
