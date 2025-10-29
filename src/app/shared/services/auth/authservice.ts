import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../routes/routes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.apiUrl;
  private imgUrl = environment.imgurl;

  constructor(private router: Router,
    private http: HttpClient,
  ) {}

  public signin(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.home]);
  }
  
  public signup(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.login]);
  }
  public forgotpassword(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.resetPassword]);
  }



  

  // sendOtp(payload: any): Observable<any> {
  //     return this.http.post<any>(`https://verify.msg91.com/otp-provider.js`, payload);
  //   }


  verifyOtp(payload: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(
    'https://control.msg91.com/api/v5/widget/verifyAccessToken',
    payload,
    { headers }
  );
}

}

