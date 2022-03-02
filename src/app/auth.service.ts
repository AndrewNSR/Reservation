import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseUrl = 'http://e7gezly.restart-technology.com/api';
  constructor(private http: HttpClient) {

  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>
      ('http://e7gezly.restart-technology.com/api/auth/login'
        ,
        {
          phone: email,
          password: password
        }
      );
  }

  getProductDetails(id): Observable<any> {
    return this.http.get(
      this.baseUrl + `/establishments/details?establishment_id=${id}`
    );
  }

  getUnitDetails(id): Observable<any> {
    return this.http.get(
      this.baseUrl + `/properties/details?property_id=${id}`
    );
  }

  signup(email: string, name: string, phone: string, password: string) {
    console.log(email, name, phone, password);
    return this.http.post<AuthResponseData>
      ('http://e7gezly.restart-technology.com/api/auth/register'
        ,
        {
          email: email,
          name: name,
          phone: phone,
          password: password
        }
      );
  }

  getfags(): Observable<any> {
    return this.http.get(this.baseUrl + '/info/faqs');
  }

  getTermsandCondition(): Observable<any> {
    return this.http.get(this.baseUrl + '/info');
  }

  getInfo(): Observable<any> {
    return this.http.get(this.baseUrl + '/info/about-us');
  }

  submit(fullname: string, email: string, phone: string, message: string) {
    console.log(fullname,email,phone, message);
    return this.http.post<AuthResponseData>
      ('http://e7gezly.restart-technology.com/api//info/contact-us'
        ,
        {
          fullname: fullname,
          email: email,
          phone: phone,
          message: message
        }
      );
  }
}