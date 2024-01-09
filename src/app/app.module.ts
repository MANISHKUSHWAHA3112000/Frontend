import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast/toast.component';
import { AdminLoginDtoComponent } from './admin/admin-login-dto/admin-login-dto.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorHandleComponent,
    FooterComponent,
    ToastComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
  
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
