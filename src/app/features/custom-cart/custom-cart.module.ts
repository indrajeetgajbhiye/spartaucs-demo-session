import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalButtonsComponent } from './additional-buttons/additional-buttons.component';
import { CmsConfig, provideDefaultConfig } from '@spartacus/core';
import { AddToSavedCartModule } from './add-to-saved-cart/add-to-saved-cart.module';
import { TestModalComponent } from './test-modal/test-modal.component';



@NgModule({
  declarations: [AdditionalButtonsComponent, TestModalComponent],
  imports: [
    CommonModule,
    AddToSavedCartModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CartApplyCouponComponent: {
          component: AdditionalButtonsComponent,
        },
      },
    }),
  ],
})
export class CustomCartModule { }
