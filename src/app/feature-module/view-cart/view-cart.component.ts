import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css'
})
export class ViewCartComponent {



  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ViewCartComponent>,
    private commonService: CommonService
  ) {
    this.currentUserId=23;
    this.getCartData();
  }

 trackByProductId(index: number, item: any): string {
    return item.productId;
  }
currentUserId:any;
   cartData:any=[];
   cartItems:any=[];
  getCartData(){
    this.commonService.viewCart(this.currentUserId).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.cartData = res.data;
          this.cartItems = res.data.items;
          console.log(this.cartData);
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });

  }

removeItem(productId:number){
const payload={
  userId: this.currentUserId,
  productId:productId
}
 this.commonService.removeCart(payload).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
         
         
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
}


  close(): void {
    this.dialogRef.close();
  }

  cartProduct:any;
  proceedCart(){
    this.dialogRef.close();
    this.router.navigate(['proceed-cart'], { state: this.cartProduct });   
  }


  wishlistProduct:any;
  wishlist(){
    this.dialogRef.close();
    this.router.navigate(['user/user-wishlist'], { state: this.wishlistProduct });   
  }

}
