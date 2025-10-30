import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth/authservice';
import { CommonService } from 'src/app/shared/services/common/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  returnUrl: string = '';

  public routes = routes;
  public show_password = true;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.loginForm.controls;
  }

  constructor(private authService: AuthService,
    private commonService: CommonService,
    private router: Router,

    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '';
    });
  }


  loginData: any[] = [];
  login() {
    const formData = new FormData();
    formData.append('email', this.loginForm.get('email')?.value ?? '');
    formData.append('password', this.loginForm.get('password')?.value ?? '');

    this.authService.userSignIn(formData).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.loginData = res.data;

          // ✅ User login subject update yaha karo
          this.commonService.setUserLoggedIn();

          Swal.fire({
            title: 'Success',
            text: `${res.message}`,
            icon: 'success',
            confirmButtonColor: '#0E82FD',
          }).then((result) => {
            if (result.isConfirmed) {

              if (this.returnUrl) {
                this.router.navigateByUrl(this.returnUrl);
              } else {
                this.router.navigate([this.routes.listingGrid]);
              }
              
            }
          });
        }
      },
      error: (err: any) => {
        Swal.fire({
          title: 'Error',
          text: 'Login failed. Wrong credentials!',
          icon: 'error',
          confirmButtonColor: '#0E82FD',
        });
        this.commonService.logout();
      }
    });
  }







  // NEW: Google login flow
  googleLogin() {
    // this.commonService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //   .then((user: SocialUser) => {
    //     // IMPORTANT: use the Google ID token from the popup
    //     const idToken = user.idToken; // <-- send this to backend to verify
    //     // Option A: send JSON
    //     this.authService.googleSignIn({ idToken }).subscribe({
    //       next: (res: any) => {
    //         if (res.status === 'true') {
    //           this.loginData = res.data;
    //           this.router.navigate(['/user-dashboard']);
    //         } else {
    //           this.onLoginError();
    //         }
    //       },
    //       error: () => this.onLoginError()
    //     });
    //   })
    //   .catch(() => this.onLoginError());
  }

  private onLoginError() {
    Swal.fire({
      title: 'Error',
      text: 'Login failed. Wrong credentials!',
      icon: 'error',
      confirmButtonColor: '#0E82FD',
    });
    this.commonService.logout();
  }


  togglePassword() {
    this.show_password = !this.show_password;
  }





}
