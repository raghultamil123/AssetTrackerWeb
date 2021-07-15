import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetComponent } from './asset/asset.component';
import { AssetListComponent } from './asset/asset-list/asset-list.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetPopupComponent } from './dashboard/asset-popup/asset-popup.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CreateAssetComponent } from './asset/create-asset/create-asset.component';
import { AuthenticationInterceptor } from './shared/interceptor/authentication.interceptor';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    AssetListComponent,
    NotificationComponent,
    NotificationListComponent,
    DashboardComponent,
    AssetPopupComponent,
    CreateAssetComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
