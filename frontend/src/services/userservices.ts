import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/signup`, userData);
  }
  otpVerify(otpData:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/verify-otp`, otpData);
  }
  sendOTP(email:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/verify-email`, email);
  }
  suggestUserName(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/suggest-username`, data);
  }
  checkUserName(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/api/check-username`, data);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
@Injectable({
  providedIn: 'root'
}) export class OtpSend{
  private apiUrl = 'http://localhost:3000/api/mobileNumberValidation'; 
  constructor(private http: HttpClient){}
  mNumber(credentials: {username:string, mobileNumber:string }) :Observable<any>{
    return this.http.post<any>(this.apiUrl, credentials);
  }

}

@Injectable({
  providedIn:'root'
})export class OtpValidations{
  private apiUrl =  'http://localhost:3000/api/otp';
  constructor(private http: HttpClient){}
  otp(credentials: {opt:string }) :Observable<any>{
    return this.http.post<any>(this.apiUrl, credentials);
  }
}


@Injectable({
  providedIn : 'root'
}) export class UpdatePassword{
  private apiUrl =  'http://localhost:3000/api/updatePassword';
  constructor(private http: HttpClient){}
  passwordUpdate(credentials: {username:string, mobileNumber:string, newPassword:string }) :Observable<any>{
    // console.log(updatePassword);
    return this.http.post<any>(this.apiUrl, credentials);
  }
}


@Injectable({
  providedIn: 'root'
})export class SetUserName{
  private userName : string | null = null;

  setuserName(userName:string):void{
    this.userName = userName;
  }

  getuserName(): string | null {
    return this.userName;
  }
}