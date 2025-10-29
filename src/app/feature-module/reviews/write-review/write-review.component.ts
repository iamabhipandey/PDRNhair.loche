import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ElementRef, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrl: './write-review.component.css'
})
export class WriteReviewComponent {

  reviewForm:FormGroup;
  currenUserId:any=23;
  productId:any=5;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<WriteReviewComponent>,
    private commonService:CommonService
  ) {
    
     this.reviewForm = new FormGroup({
   
    rating: new FormControl('5', [Validators.required]),
    comment: new FormControl('uyuieriogotr', [Validators.required]),
  });
  }

  addReviews() {

  
      const formData = new FormData();
      formData.append('rating', this.reviewForm.get('rating')?.value ?? '5');
      formData.append('comment', this.reviewForm.get('comment')?.value ?? 'jhfkfkl;l');    
      formData.append('productId', this.productId);
      formData.append('userId', this.currenUserId);
    

 this.commonService.addReview(formData).subscribe({
      next: (res: any) => {
        if(res.status==='true'){
           Swal.fire({
                      title: '',
                      text: `${res.message}`,
                      icon: 'success',
                      confirmButtonColor: '#0E82FD',
            });             
          }else{
             Swal.fire({
                      title: `${res.message}`,
                      text: '',
                      icon: 'error',
                      confirmButtonColor: '#0E82FD',
            });             
          }
      },
      error: (err: any) => {
        alert('Something went wrong while submitting');
        console.error(err);
      }
    });

 

  }
  close(): void {
    this.dialogRef.close();
  }
 @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  images: string[] = [];

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(reader.result as string);
      };
      reader.readAsDataURL(input.files[0]);
      input.value = '';
    }
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
  }
}
