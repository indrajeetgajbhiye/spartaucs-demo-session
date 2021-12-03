import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { SoldTos } from '../../../assets/data/sold-tos';
import { AddSoldTo, GetSoldTo } from './sold-to.actions';
import * as SoldToSelectors from './sold-to.selectors'
@Injectable({
  providedIn: 'root'
})
export class SoldToService {

  constructor(private http: HttpClient, private store: Store) {

   }

   getSoldTos(){
     return of(SoldTos)
   }
   public getAllSoldTos(){
     return this.store.select(SoldToSelectors.getAllSoldTos);
   }
   
   public getSelectedSoldTo(){
    return this.store.select(SoldToSelectors.getCurrentSelectedSoldTo);
  }
  public addSelectedSoldTo(soldTo){
    return this.store.dispatch(new AddSoldTo(soldTo))
  }
  public addAllSoldTos(){
    this.store.dispatch(new GetSoldTo())
  }
}
