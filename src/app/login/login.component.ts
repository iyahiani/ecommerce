import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription!: Subscription;
  @ViewChild('googleBtnRef')
  googleBtn?: ElementRef;
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router, private socialAuthService: SocialAuthService) { }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.router.navigate(['home']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });

  }
  googleSignin(googleWrapper: any) {
    googleWrapper.click();
    this.authSubscription = this.socialAuthService.authState.subscribe((user) => {
      console.log('user', user);
      if (user){
        this.storageService.saveUser(user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.router.navigate(['home']);
      }

    });
  }

}
