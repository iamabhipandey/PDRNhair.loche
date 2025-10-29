import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-user-wishlist',
  templateUrl: './user-wishlist.component.html',
  styleUrls: ['./user-wishlist.component.css']
})
export class UserWishlistComponent {
  public routes = routes;
  isClassAdded: boolean[] = [true, true, false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  constructor(private viewportScroller: ViewportScroller ) {
  }
   ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
