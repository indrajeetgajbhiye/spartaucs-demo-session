import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConfig } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';

export const layoutConfig: LayoutConfig = {
  // deferredLoading: {
  //   strategy: DeferLoadingStrategy.DEFER,
  //   intersectionMargin: '50px',
  // },
  layoutSlots: {
    header: {
      lg: {
        slots: [
          'PreHeader',
          // 'SiteContext',
          // 'SiteLinks',
          'SiteLogo',
          'SearchBox',
          'MiniCart',
          'SiteLogin',
          
          // 'NavigationBar',
        ],
      },
      slots: ['SiteLogo', 'SearchBox', 'MiniCart', 'PreHeader'],
    },
    navigation: {
      lg: { slots: ['NavigationBar'] },
      slots: ['SiteLogin', 'NavigationBar', 'SiteContext', 'SiteLinks'],
    },
    footer: {
      slots: ['Footer'],
    },
    LandingPage2Template: {
      // pageFold: 'Section2B',
      slots: [
        'Section1',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'Section5',
      ],
    }
  },
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({...layoutConfig})
  ]
})
export class LayoutModule { }
