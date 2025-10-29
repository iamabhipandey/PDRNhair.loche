import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {
 constructor(
      private router: Router,
      private dialogRef: MatDialogRef<AddAddressComponent>,
    ) {
      
    }

  close(): void {
    this.dialogRef.close();
  }

}
