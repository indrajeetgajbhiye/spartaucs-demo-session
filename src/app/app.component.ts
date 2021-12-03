import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { ModalRef, ModalService } from '@spartacus/storefront';
import { TestModalComponent } from './features/custom-cart/test-modal/test-modal.component';
import { GetSoldTo } from './store/sold-to/sold-to.actions';
import { SoldToService } from './store/sold-to/sold-to.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spartacus-amazona';
  modalRef: ModalRef;
  constructor(
    private globalMessageService: GlobalMessageService,
    private soldToService: SoldToService,
    private modalService: ModalService
  ) {
    this.makeCall();
  }
  activateMsg() {
    this.globalMessageService.add(
      'This is the global message, Error!',
      GlobalMessageType.MSG_TYPE_ERROR,
      5000
    );

    this.globalMessageService.add(
      'This is the global message, Info!',
      GlobalMessageType.MSG_TYPE_INFO,
      5000
    );

    this.globalMessageService.add(
      'This is the global message, Warning!',
      GlobalMessageType.MSG_TYPE_WARNING,
      5000
    );

    this.globalMessageService.add(
      'This is the global message, Confirmation!',
      GlobalMessageType.MSG_TYPE_CONFIRMATION,
      5000
    );
  }
  makeCall() {
    this.soldToService.addAllSoldTos();
  }

  openPopUp() {
    this.modalRef = this.modalService.open(TestModalComponent, {
      centered: true,
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
    });
    this.modalRef.result
      .then((res) => {
        console.log('result=====>', res);
      })
      .catch((esc) => {
        console.log('closed');
      });
  }
}
