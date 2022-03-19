import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
 {path:'',component:HomeComponent},
 {path:'home',component:HomeComponent},
 {path:'logout',component:LogoutComponent},

 {path:'login',loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
 {path:'signup',loadChildren:()=>import('./modules/signup/signup.module').then(m=>m.SignupModule)},
 {path:'user-home',loadChildren:()=>import('./modules/user-home/user-home.module').then(m=>m.UserHomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
