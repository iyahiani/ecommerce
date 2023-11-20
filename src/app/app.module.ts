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
import {SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider} from "angularx-social-login";
import {GoogleAuthentComponent} from "./login/google-authent/google-authent.component";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";

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
    MatLegacyButtonModule
  ],
  providers: [{provide: httpInterceptorProviders, useClass: HttpRequestInterceptor},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('389716753608-9ju211ha6l0g2fpunb7p4799mktldasj.apps.googleusercontent.com"') // your client id
          }
        ]
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
