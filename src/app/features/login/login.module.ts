import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CmsConfig, ConfigModule, I18nModule, provideDefaultConfig, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { PageSlotModule } from '@spartacus/storefront';



@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule, UrlModule, PageSlotModule, I18nModule, 
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        LoginComponent: {
          component: LoginComponent,
        },
      },
    })
  ],
  providers: [
  ],
})
export class LoginModule { }
