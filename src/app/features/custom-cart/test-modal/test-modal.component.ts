import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { SoldToService } from 'src/app/store/sold-to/sold-to.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {
  soldTos$: Observable<any>
  selectedSoldTo: any;
  constructor(private modalService: ModalService, private soldToService: SoldToService) { }
  ngOnInit(): void {
    this.soldTos$ = this.soldToService.getAllSoldTos()
  }
  selectSoldTo(soldTo){
    this.selectedSoldTo = soldTo
  }
  dismissModal(reason?){
    if(reason == 'ok'){
      this.soldToService.addSelectedSoldTo(this.selectedSoldTo);
    }
    this.modalService.closeActiveModal(reason);
  }
}
