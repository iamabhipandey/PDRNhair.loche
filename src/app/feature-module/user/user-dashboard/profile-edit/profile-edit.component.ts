import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent {
    constructor(
      private router: Router,
      private dialogRef: MatDialogRef<ProfileEditComponent>,
    ) {
      
    }

  close(): void {
    this.dialogRef.close();
  }

onImageSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      const imgElement = document.getElementById('profileImage') as HTMLImageElement;
      if (imgElement) {
        imgElement.src = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}


}
