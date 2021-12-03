import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddToCartModule, IconModule, MediaModule } from '@spartacus/storefront';
import { CmsConfig, ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    IconModule,
    UrlModule,
    I18nModule,
    AddToCartModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        SearchBoxComponent: {
          component: SearchBoxComponent,
        },
      },
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SearchBoxComponent]
})
export class SearchBoxModule { }
