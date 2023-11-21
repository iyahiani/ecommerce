import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import {httpInterceptorProviders, HttpRequestInterceptor} from './_helpers/http.interceptor';
import { HeaderComponent } from './header/header/header.component';
import {SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider,GoogleSigninButtonModule} from "@abacritt/angularx-social-login";
import {GoogleAuthentComponent} from "./login/google-authent/google-authent.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HeaderComponent,
    GoogleAuthentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '338669335569-a7ccu9o6d0s697ieekudq6a49h33ehe9.apps.googleusercontent.com'
              )
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('clientId')
            }
          ],
          onError: (err) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
