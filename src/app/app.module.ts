import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginInService} from './services/loginIn/login-in.service';
import {TokenService} from './services/token/token.service';
import {UsersService} from './services/users/users.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersComponent } from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LoginPageComponent,
    UsersComponent
  ],
  imports: [
      Ng2SearchPipeModule,
      NgxPaginationModule,
      BrowserModule,
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
      DropDownsModule,
      Ng2LoadingSpinnerModule.forRoot({}),
      FormsModule, NgbModule.forRoot(),
      RouterModule.forRoot([
          { path: 'index.html', component: LoginPageComponent},
          { path: '', component: LoginPageComponent},
          { path: 'campanhas', component: UsersComponent},
          ])

  ],
  providers: [LoginInService, UsersService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
