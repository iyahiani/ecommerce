import { Injectable } from '@angular/core';
import {BehaviorSubject, concatMap, EMPTY, from, map, Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Account} from "./account";
import {environment} from "../../environnements/environment";
declare const FB: any;
const baseUrl = `${environment.apiUrl}/accounts`;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private accountSubject: BehaviorSubject<Account>;
  public account: Observable<Account>;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private http: HttpClient
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.accountSubject = new BehaviorSubject<Account>(null);
    this.account = this.accountSubject.asObservable();
  }

  public get accountValue(): Account {
    return this.accountSubject.value;
  }
  login() {
    // login with facebook then authenticate with the API to get a JWT auth token
    this.facebookLogin()
        //.pipe(concatMap(accessToken => this.apiAuthenticate(accessToken)))
        .subscribe((user) => {
          // get return url from query parameters or default to home page
            console.log(user)
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        });
  }
  facebookLogin() {
    // login with facebook and return observable with fb access token on success
    return from(new Promise<any>(resolve => FB.login(resolve)))
        .pipe(concatMap(({ authResponse }) => {
          if (!authResponse) return EMPTY;
            console.log(authResponse);
          return of(authResponse.accessToken);
        }));
  }
    /*apiAuthenticate(accessToken: string) {
        // authenticate with the api using a facebook access token,
        // on success the api returns an account object with a JWT auth token
        return this.http.post<any>(`${baseUrl}/api`, { accessToken })
            .pipe(map(account => {
                this.accountSubject.next(account);
                return account;
            }));
    }*/

}
