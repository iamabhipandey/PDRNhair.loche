import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guest-page',
  templateUrl: './guest-page.component.html',
  styleUrl: './guest-page.component.css'
})
export class GuestPageComponent {

  addressForm: FormGroup;


  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<GuestPageComponent>,
    private commonService: CommonService
  ) {

    this.addressForm = new FormGroup({
      pincode: new FormControl('767678', [Validators.required]),
      city: new FormControl('agra', [Validators.required,]),
      state: new FormControl('up', [Validators.required,]),
      houseNo: new FormControl('123', [Validators.required]),
      town: new FormControl('ashok nagar', [Validators.required]),
       contactPerson: new FormControl('rekha', [Validators.required]),
      mobileNo: new FormControl('76467895789', [Validators.required,]),      
    });
  }


  close(): void {
    this.dialogRef.close();
  }

  cartProduct: any;
  proceedCart() {
    this.dialogRef.close();
    this.router.navigate(['proceed-cart'], { state: this.cartProduct });
  }


  // wishlistProduct:any;
  // wishlist(){
  //   this.dialogRef.close();
  //   this.router.navigate(['user/user-wishlist'], { state: this.wishlistProduct });   
  // }







  addNewAddress() {
    const formData = new FormData();
    formData.append('pincode', this.addressForm.get('pincode')?.value ?? '');
    formData.append('houseNo', this.addressForm.get('houseNo')?.value ?? '');
    formData.append('city', this.addressForm.get('city')?.value ?? '');
    formData.append('state', this.addressForm.get('state')?.value ?? '');
     formData.append('town', this.addressForm.get('town')?.value ?? '');
    formData.append('address', this.addressForm.get('address')?.value ?? '');
        formData.append('contactPerson', this.addressForm.get('contactPerson')?.value ?? '');
    formData.append('mobileNo', this.addressForm.get('mobileNo')?.value ?? '');
      formData.append('userProfileId', this.currentUserId);

    this.commonService.addAddress(formData).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          Swal.fire({
            title: `${res.message}`,
            text: '',
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });

        } else {
          Swal.fire({
            title: `${res.message}`,
            text: '',
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });
        }
      },
      error: (err: any) => {
        Swal.fire({
          title: `${err.message}`,
          text: '',
          icon: 'error',
          confirmButtonColor: '#0E82FD',
        });
        console.error(err);
      }
    });
  }


  paymentMethod: any='online';
  paymentId: any=7678;
  paymentStatus: any='success';
  currentUserId: any=23;
  addressId: number=1;

  placeOrder() {
    const payload = {
      userId: this.currentUserId,
      addressId: this.addressId,
      paymentMethod: this.paymentMethod,
      paymentId: this.paymentId,
      paymentStatus: this.paymentStatus,

    }
    this.commonService.placeOrder(payload).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          Swal.fire({
            title: `${res.message}`,
            text: '',
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });

        } else {
          Swal.fire({
            title: `${res.message}`,
            text: '',
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });
        }
      },
      error: (err: any) => {
        Swal.fire({
          title: `${err.message}`,
          text: '',
          icon: 'error',
          confirmButtonColor: '#0E82FD',
        });
        console.error(err);
      }
    });
  }
}
