import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
 {path:'',component:HomeComponent},
 {path:'home',component:HomeComponent},
 {path:'login',loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
 {path:'signup',loadChildren:()=>import('./modules/signup/signup.module').then(m=>m.SignupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
