import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./imodule/admin/admin.module').then(m => m.AdminModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
      })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
