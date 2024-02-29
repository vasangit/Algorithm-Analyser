import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataqualityComponent } from './dataquality/dataquality.component';
import { ForecastingComponent } from './forecasting/forecasting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
 {
 path:'',component:LoginComponent
 },
 {
   path:'register',component:RegisterComponent

 },
 {
   path:'home',
   component:HomeComponent
 },
 {
   path:'data',
   component:DataqualityComponent
 },
 {
   path:'forecasting',
   component:ForecastingComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
