import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import {RecordsService} from './records.service'
import { AppComponent } from './app.component';
import {fromEventPattern} from 'rxjs';
import {HttpClientModule} from '@angular/common/http'
import{RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },{
        path: 'admin',
        component: AdminComponent
      },{
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
