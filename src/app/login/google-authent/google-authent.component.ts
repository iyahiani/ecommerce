import { Component } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";
@Component({
  selector: 'app-google-authent',
  templateUrl: './google-authent.component.html',
  styleUrls: ['./google-authent.component.scss']
})
export class GoogleAuthentComponent {
  constructor( private socialAuthService: SocialAuthService, private router: Router) {
  }
  loginWithGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then( () =>
      {
        this.router.navigate(['home'])},(error: any) =>{
        console.log(error);
      });
  }
  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
