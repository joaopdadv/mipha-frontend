import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModalComponent } from './pages/login/login-modal/login-modal.component';
import { RegisterModalComponent } from './pages/login/register-modal/register-modal.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "login"},
  {path: 'login', component: LoginComponent, children: [
    {path: "", component: LoginModalComponent},
    {path: "register", component: RegisterModalComponent}
  ]},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
