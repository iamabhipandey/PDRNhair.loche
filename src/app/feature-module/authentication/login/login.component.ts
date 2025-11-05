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
 public routes = routes;
  public show_password = true;
  public loginWithOtp = false; // checkbox toggle ke liye
  public otpSent = false; // verify button ke baad OTP field show karna

  form = new FormGroup({
    email: new FormControl('abhishek@gmail.com', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('123456', [Validators.required]),

    // ✅ Mobile aur OTP ke liye extra controls
    mobileNo: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/), // exactly 10 digit ka validation
    ]),
    otp: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}

  signin() {
    if (this.loginWithOtp) {
      // ✅ Login with OTP
      if (this.form.controls['mobileNo'].invalid) {
        this.form.controls['mobileNo'].markAsTouched();
        return;
      }
      if (this.otpSent && this.form.controls['otp'].invalid) {
        this.form.controls['otp'].markAsTouched();
        return;
      }
      console.log('OTP Login Success ✅', this.form.value);
    } else {
      // ✅ Normal Email-Password Login
      if (this.form.valid) {
        this.auth.signin();
      }
    }
  }

  togglePassword() {
    this.show_password = !this.show_password;
  }

  sendOtp() {
    if (this.form.controls['mobileNo'].valid) {
      this.otpSent = true;
      console.log('OTP sent to:', this.form.controls['mobileNo'].value);
    } else {
      this.form.controls['mobileNo'].markAsTouched();
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }
}
