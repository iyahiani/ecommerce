import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";
import {googleSignInResponse, googleCredentials} from './Igoogle'
declare global {
  interface Window {
    google: any;
  }
}
@Component({
  selector: 'app-google-authent',
  templateUrl: './google-authent.component.html',
  styleUrls: ['./google-authent.component.scss']
})
export class GoogleAuthentComponent {
  @Output() loginWithGoogle: EventEmitter<any> = new EventEmitter<any>();
  constructor( ) {
  }
  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement('div');
    document.body.appendChild(googleLoginWrapper);
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon'
    });

    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton?.click();
      },
    };
  };

  handleGoogleLogin() {
    this.loginWithGoogle.emit(this.createFakeGoogleWrapper());
  }
}
