import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { AddAddressComponent } from './add-address/add-address.component';
interface data {
  value: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
    constructor( private matDialog: MatDialog ) {}
    
   getCartData(){
  
    }
       openModal(): void {    
        const dialogResult = this.matDialog.open(ProfileEditComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
            this.getCartData();
          });   
        }
        editaddress(): void {    
        const dialogResult = this.matDialog.open(AddAddressComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
            this.getCartData();
          });   
        }
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];
  selectedList2: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];

}
