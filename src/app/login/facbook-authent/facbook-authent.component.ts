import {Component, OnInit} from '@angular/core';
import {FacebookLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

import {environment} from "../../../environnements/environment";
import {finalize} from "rxjs/operators";
import {logging} from "protractor";
import {concatMap, EMPTY, from, of} from "rxjs";
import {LoginService} from "../../_services/login.service";
declare let FB: any;
@Component({
  selector: 'app-facbook-authent',
  templateUrl: './facbook-authent.component.html',
  styleUrls: ['./facbook-authent.component.scss']
})

export class FacebookAuthentComponent implements OnInit{
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;

  constructor(private loginService : LoginService){}

  ngOnInit(): void {
   (window as any).fbAsyncInit = function () {
      FB.init({
        appId: environment.facbookID,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });

    };

    // load facebook sdk script
    (function (d, s, id) {
      let js: any;
      const fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      // eslint-disable-next-line prefer-const
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }
    login() {
        // login with facebook then authenticate with the API to get a JWT auth token
        this.loginService.login();
    }

}
