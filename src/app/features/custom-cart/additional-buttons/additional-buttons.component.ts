import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActiveCartService, AuthService, GlobalMessageService, GlobalMessageType, MultiCartService, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, User, UserService } from '@spartacus/core';
import { ModalRef, ModalService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'app-additional-buttons',
  templateUrl: './additional-buttons.component.html',
  styleUrls: ['./additional-buttons.component.scss']
})
export class AdditionalButtonsComponent implements OnInit, OnDestroy {
  user$: Observable<User | undefined>;
  cartId$: Observable<string> = this.activeCartService.getActiveCartId()
  userType: any;
  modalRef: ModalRef
  constructor(
    private activeCartService: ActiveCartService,     
    private auth: AuthService,
    private userAccount: UserService,
    private multicartService: MultiCartService,
    private globalMessageService: GlobalMessageService,
    private modalService: ModalService
    ) {
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = OCC_USER_ID_CURRENT;
          return this.userAccount.get();
        } else {
          this.userType = OCC_USER_ID_ANONYMOUS;
          return of(undefined);
        }
      })
    );
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      console.log(user)
      if(user){
        this.userType = OCC_USER_ID_CURRENT;
      }
      else{
        
        this.userType = OCC_USER_ID_ANONYMOUS;
      }
    })
  }

  deleteCart(cartId){
    this.multicartService.deleteCart(cartId, this.userType)
  }
  saveCart(){
    
  }
  activateMsg(){
    this.globalMessageService.add("This is the global message, Error!", GlobalMessageType.MSG_TYPE_ERROR, 5000)
    
    this.globalMessageService.add("This is the global message, Info!", GlobalMessageType.MSG_TYPE_INFO, 5000)
    
    this.globalMessageService.add("This is the global message, Warning!", GlobalMessageType.MSG_TYPE_WARNING, 5000)
    
    this.globalMessageService.add("This is the global message, Confirmation!", GlobalMessageType.MSG_TYPE_CONFIRMATION, 5000)

  }

  activateModal(){
    this.modalRef = this.modalService.open(TestModalComponent, {
      centered: true,
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    })
    this.modalRef.componentInstance.testParam = new Date(Date.now());
    this.modalRef.result.then((res) => {
      console.log('result=====>', res)
    })
    .catch((esc) => {
      console.log('closed')
    })
  }
  ngOnDestroy(){
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR)
    
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_INFO)

    
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_WARNING)
    
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION)
  }
}
