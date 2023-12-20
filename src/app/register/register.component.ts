import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {StorageService} from "../_services/storage.service";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router, private socialAuthService: SocialAuthService) { }
  authSubscription!: Subscription;

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['login']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  googleSignin(googleWrapper: any) {
    googleWrapper.click();
    this.authSubscription = this.socialAuthService.authState.subscribe((user) => {
      console.log('user', user);
      if (user){
        this.storageService.saveUser(user);
        this.router.navigate(['home']);
      }

    });
  }
}
