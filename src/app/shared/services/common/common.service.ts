import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DataFactoryService } from './data-factory.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public userLogin: boolean = false;

  private API_URL = environment.apiUrl;
  private imgUrl = environment.imgurl;

  private token: string | null = null;

  currentUser: any;
  loggedUserId: string = '';
  loggedUserEmail: string = '';
  loggedUserType: string = '';

  // BehaviorSubject to track login state
  private userLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userLogin$: Observable<boolean> = this.userLoginSubject.asObservable();

  constructor(private http: HttpClient,
    private dataFactoryService: DataFactoryService,
    
  ) {
    this.loadFromDataFactory();
  }



  private loadFromDataFactory(): void {
    const storedToken = this.dataFactoryService.getToken();
    const storedUser = this.dataFactoryService.getCurrentUser();
    if (storedToken) {
      this.token = storedToken;
    }
    if (storedUser) {
      this.currentUser = storedUser;
    }

    this.userLoginSubject.next(!!this.token);
  }


  // login(credentials: any): Observable<any> {
  //   return this.http.post<any>(`${this.API_URL}/auth/login`, credentials)
  //     .pipe(
  //       map(response => {
  //         if (response.status === '1') {
  //           this.dataFactoryService.setToken(response.data.token);
  //           this.dataFactoryService.setCurrentUser(response.data);
  //           this.loggedUserType = response.data.loggedUserType;
  //           this.userLoginSubject.next(true);
  //           this.cartService.transferSessionCartToLoggedInCart();
  //           this.cartService.updateCartData();
  //         }
  //         return response;
  //       })
  //     );
  // }

  currentLoginStatus() {
    return this.http.post<any>(`${this.API_URL}/auth/currentLoginStatus`, {})
  }

  logout(): void {
    this.token = null;
    this.currentUser = null;
   // this.loggedUserType = null || '';
    this.dataFactoryService.setToken('');
    this.dataFactoryService.setCurrentUser(null);
    this.userLoginSubject.next(false);
    
  }


  logoutCurrentSession(): void {
    this.logout();
  }

  signupUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registration/userSignUp`, user)
      .pipe(
        map(response => response)
      );
  }

 
  uploadFile(imageFile: File) {
    this.fatchLoggerUser();
    let payLoad = new FormData();
    payLoad.append('loggedUserId', this.loggedUserId);
    payLoad.append('loggedUserEmail', this.loggedUserEmail);
    payLoad.append('loggedUserType', this.loggedUserType);
    payLoad.append('ipAddress', '');
    payLoad.append('loggebrowserdUserId', '');
    payLoad.append('file', imageFile);

    return this.http.post<any>(
      `${this.imgUrl}/lab/document/uploadFile`,
      payLoad
    );
  }



  deleteFile(payLoad: any) {
    return this.http.post<any>(
      `${this.imgUrl}/lab/document/deleteDocument`,
      payLoad
    );
  }

  downloadFile(payLoad: any) {
    return this.http.post<any>(
      `${this.imgUrl}/lab/document/downloadFile`,
      payLoad
    );
  }

  viewFile(payLoad: any): Observable<any> {
    return this.http.post<any>(
      `${this.imgUrl}/lab/document/viewFile`,
      payLoad, { responseType: 'blob' as 'json' }
    );
  }

  private fatchLoggerUser() {
    this.currentUser = this.dataFactoryService.getCurrentUser();
    if (this.currentUser) {
      this.loggedUserEmail = this.currentUser.loggedUserEmail;
      this.loggedUserId = this.currentUser.loggedUserId;
      this.loggedUserType = this.currentUser.loggedUserType;
    }
  }



  sendSignUpOTP(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registration/sendSignUpOTP`, payload);
  }

  sendOtp(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/sendOTP`, payload);
  }


  verifyOtp(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/verifyOTP`, payload);
  }

  updatePasswordByOtp(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/updatePasswordByOTP`, payload);
  }


  // date time conversion 
  changeInputDateFormat(inputDate: string): string {
    let formattedDate = '';
    if (inputDate) {
      const date = new Date(inputDate).getDate();
      const month = new Date(inputDate).getMonth() + 1;
      const Year = new Date(inputDate).getFullYear();
      formattedDate = ((date.toString().length == 1) ? '0' + date.toString() : date.toString()) + '/' + ((month.toString().length == 1) ? '0' + month.toString() : month.toString()) + '/' + Year.toString();
    }
    return formattedDate;
  }

  changeInputDateTimeFormat(inputDateTime: string): string {
    let formattedDateTime = '';
    let time = '';
    if (inputDateTime) {
      formattedDateTime = this.changeInputDateFormat(inputDateTime);
      const hours = new Date(inputDateTime).getHours();
      const minutes = (new Date(inputDateTime).getMinutes() > 9) ? new Date(inputDateTime).getMinutes().toString() : '0' + new Date(inputDateTime).getMinutes().toString();
      if (hours >= 12) {
        if (hours > 12) {
          time = (hours - 12).toString() + ':' + minutes + ' PM';
        } else {
          time = hours + ':' + minutes + ' PM';
        }

      } else if (hours == 0) {
        time = '12' + ':' + minutes + ' AM';
      } else {
        time = hours + ':' + minutes + ' AM';
      }
      formattedDateTime += ' ' + time;
    }
    return formattedDateTime;
  }

  changeInputTimeFormat(inputTime: Date): string {
    let formattedTime = '';
    if (inputTime) {
      const hours = inputTime.getHours();
      const minutes = (inputTime.getMinutes() > 9) ? inputTime.getMinutes().toString() : '0' + inputTime.getMinutes().toString();
      if (hours >= 12) {
        if (hours > 12) {
          formattedTime = (hours - 12).toString() + ':' + minutes + ' PM';
        } else {
          formattedTime = hours + ':' + minutes + ' PM';
        }

      } else if (hours == 0) {
        formattedTime = '12' + ':' + minutes + ' AM';
      } else {
        formattedTime = hours + ':' + minutes + ' AM';
      }
    }
    return formattedTime;
  }

  changeHourFormatTime(timeString: string): string {
    let hourFormatTime = '';
    const currDate = new Date();
    hourFormatTime = this.MMDDYYFormat(currDate.toString());
    const [time, period] = timeString.split(' ');
    const [hour, minute] = time.split(':');
    let formattedHour = parseInt(hour);
    if (period === 'PM' && formattedHour !== 12) {
      formattedHour += 12;
    }
    if (period == 'AM' && formattedHour == 12) {
      formattedHour = 0;
    }
    return `${hourFormatTime} ${formattedHour}:${minute}`;

  }


  parseTime(timeString: string): Date {
    const [time, modifier] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(modifier === 'PM' && hours < 12 ? hours + 12 : hours === 12 && modifier === 'AM' ? 0 : hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }


  MMDDYYFormat(inputDate: string): string {
    let formattedDate = '';
    if (inputDate) {
      const date = new Date(inputDate).getDate();
      const month = new Date(inputDate).getMonth() + 1;
      const Year = new Date(inputDate).getFullYear();
      formattedDate = month.toString() + '/' + date.toString() + '/' + Year.toString();
    }
    return formattedDate;
  }

  splitDateToTime(date: string): string {
    let dateFormat: any
    if(date) {
      if(date.includes(' ')) {
        dateFormat = date.split(' ');
      }
    }
    return dateFormat[0];
  }



  private activeTabSubject = new BehaviorSubject<number>(1);
  activeTab$ = this.activeTabSubject.asObservable();

  setActiveTab(tabIndex: number): void {
    this.activeTabSubject.next(tabIndex);
  }


  getTabIndex(tab: string): number {
    switch (tab) {
      // case 'dashboard': return 1;
      case 'profile': return 1;
      case 'appointments': return 2;
      case 'family': return 3;
      case 'labbooking': return 4;
      case 'medicalhistory': return 5;
      case 'labreports': return 6;
      case 'invoice': return 7;
      case 'medicine-reminder': return 8;
      default: return 1;
    }
  }



  getStateList() {
    return this.http.get<any>('assets/json/state.json')
      .pipe(
        map((res: any) => {
          return res;
        }));
  }








   getAllProductVerifiedData(): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.get(`${this.API_URL}/product/get-all-verified-product-by-admin`, { headers });
}



   getVerifiedProductById(id:number): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.get(`${this.API_URL}/product/get-product/${id}`, { headers });
}




 private userDocAppointmentData: any;
  setUserProductData(data: any) {
    this.userDocAppointmentData = data;
  }
  getUserProductData() {
    return this.userDocAppointmentData;
  }


  addToCart(payload:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/cart/add`, payload);
}

 removeCart(payload:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/cart/remove`, payload);
}


 viewCart(userId:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.get(`${this.API_URL}/cart/view-cart/${userId}`, {headers});
}




 placeOrder(payload:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/order/place`, payload);
}






 addAddress(payload:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/address/add`, payload);
}


 getAllAddress(payload:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.get(`${this.API_URL}/address/get-address`, payload);
}


updateUserData(payload:any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/user/update`, payload);
}


addReview(payload:FormData): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/review/add`, payload);
}


getReviewById(productId:string): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.get(`${this.API_URL}/review/${productId}`, {headers});
}


searhProductData(formData:FormData): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.post(`${this.API_URL}/product/search-product`,  formData );
}

}
