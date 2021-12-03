import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@spartacus/core';
import { CmsPageGuard } from '@spartacus/storefront';
import { CustomComponent } from './features/custom/custom.component';
import { LoginComponent } from './features/login/login/login.component';


const routes: Routes = [
  {
    path: 'indrajeet/:xyz',
    component: CustomComponent,
    canActivate: [CmsPageGuard],
    data: {pageLabel: '/homepage'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
