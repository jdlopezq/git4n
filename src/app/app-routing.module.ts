import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['home']);
const redirectLoggedInToTable = () => redirectUnauthorizedTo(['table']);


const routes: Routes = [
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule), canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }}, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),  },
  { path: 'table', loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule), canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
