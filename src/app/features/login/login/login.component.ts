import { Component, OnInit } from '@angular/core';
import { user } from '@spartacus/assets/translations/en/user';
import { AuthService, CmsNavigationComponent, CmsService, User, UserService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SoldToService } from 'src/app/store/sold-to/sold-to.service';

@Component({
  selector: 'cx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user$: Observable<User | undefined>;
  openMenu = false;
  name = "Spartacus"
  soldTo: Observable<any>;
  constructor(
    private auth: AuthService,
    private userAccount: UserService,
    private compoenentData: CmsComponentData<CmsNavigationComponent>,
    private cmsService: CmsService,
    private soldToService: SoldToService
  ) {}
    navComponent$ = this.cmsService.getComponentData('MyAccountComponent');
    node$ = this.cmsService.getNavigationEntryItems('MyAccountNavNode')
  ngOnInit(): void {
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccount.get();
        } else {
          return of(undefined);
        }
      })
    );

    this.node$.subscribe(data => {
      console.log(data)
    })
    this.soldTo = this.soldToService.getSelectedSoldTo()
  }
  toggle(){
    this.openMenu = !this.openMenu
  }
}
