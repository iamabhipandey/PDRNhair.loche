import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { header } from 'src/app/shared/services/model/model';
import { SidebarService } from 'src/app/shared/services/sidebar/sidebar.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewCartComponent } from '../../view-cart/view-cart.component';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  public routes = routes;
  currentUserId:any;
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar : SidebarService,
    private router: Router,
    private matDialog: MatDialog,
    private dataFactory: DataFactoryService,
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;


    this.currentUserId ='23';
  }

  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }

  wishlistProduct:any;
  wishlist(){
    this.router.navigate(['user/user-wishlist'], { state: this.wishlistProduct });   
  }



 searhProductData(category:string){
  const payload={
 productName: 'Cetaphil',
    brandName: 'Cetaphil',
    category: category,
    subCategory: 'Men Fragrances',
    superSubCategory: 'Deodorant & Fragrances',
    productType: '',
    concern: ''
  }

  const formData = new FormData();
Object.entries(payload).forEach(([key, value]) => {
  formData.append(key, value ?? '');
});
   this.common.searhProductData(formData).subscribe({
        next: (res: any) => {
          if (res.status === 'true') {
            Swal.fire({
              title: `${res.message}`,
              text: '',
              icon: 'success',
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

  
  viewCart(): void {    
    const dialogResult = this.matDialog.open(ViewCartComponent);
      dialogResult.afterClosed().subscribe((res: string) => {
        //this.getCartData();
      });   
    }
}
