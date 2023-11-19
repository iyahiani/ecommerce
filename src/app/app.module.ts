import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import {MatButtonModule} from '@angular/material/button';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule,GoogleSigninButtonDirective,GoogleSigninButtonModule
   } from '@abacritt/angularx-social-login';
import { GoogleAuthentComponent } from './login/google-authent/google-authent.component';
import { FacbookAuthentComponent } from './login/facbook-authent/facbook-authent.component';

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
    GoogleAuthentComponent,
    FacbookAuthentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: httpInterceptorProviders, useClass: HttpRequestInterceptor},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '389716753608-9ju211ha6l0g2fpunb7p4799mktldasj.apps.googleusercontent.com'
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
export class AppModule {
}
