import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environnements/environment";

const AUTH_API = environment.api;
const httpParams = new HttpParams();
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpOption = new HttpParams();
  constructor(private http: HttpClient) {
  }


  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/login',
      {
        email,
        password,
      }
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/create',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
