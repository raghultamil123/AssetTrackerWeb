import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'main',component:HomeComponent,children:[
    {path:'assets',component:AssetComponent},
  {path:'notifications',component:NotificationComponent},
  {path: 'dashboard',component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
