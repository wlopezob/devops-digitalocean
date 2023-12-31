import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './libs/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule),
    canActivate: [AuthenticatedGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
