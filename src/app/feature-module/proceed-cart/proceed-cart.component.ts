import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-proceed-cart',
  templateUrl: './proceed-cart.component.html',
  styleUrl: './proceed-cart.component.css'
})
export class ProceedCartComponent {
    public routes = routes;

currentUserId:string='23';
addressId:string='1';
  constructor(
    private commonService: CommonService, private router: Router,
    private matDialog: MatDialog, private viewportScroller: ViewportScroller) { 
    }
 ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }



    addNewAddress(): void {    
      const dialogResult = this.matDialog.open(GuestPageComponent);
        dialogResult.afterClosed().subscribe((res: string) => {
          // this.getCartData();
        });   
      }

      paymentMethod:any;
      paymentId:any;
paymentStatus:any;

    placeOrder(productId:number){
const payload={
  userId: this.currentUserId,
  addressId:this.addressId,
  paymentMethod:this.paymentMethod,
  paymentId:this.paymentId,
  paymentStatus:this.paymentStatus,

}
 this.commonService.placeOrder(payload).subscribe({
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

}
