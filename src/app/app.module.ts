import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { environment } from 'src/environments/environment';
import { LayoutModule } from './config/layout/layout.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './features/login/login.module';
import { SearchBoxModule } from './features/search-box/search-box.module';
import { CustomCartModule } from './features/custom-cart/custom-cart.module';
import { I18nModule } from '@spartacus/core';
import { translations } from 'src/assets/i18n-translations/translations';
import { translationChunksConfig } from 'src/assets/i18n-translations/transalation-chunks.config';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Effects, Stores } from './store/app.store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    LoginModule,
   SearchBoxModule,
   CustomCartModule,
   I18nModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.baseUrl
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: [environment.baseSite]
      },
      i18n: {
        backend: {
          loadPath: 'assets/i18n-translations/{{lng}}/{{ns}}.ts',
        },
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '3.0'
      }
    }),
    StoreModule.forRoot(Stores),
    EffectsModule.forRoot(Effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
