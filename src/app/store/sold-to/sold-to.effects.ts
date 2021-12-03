import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { from } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { SoldToActionTypes } from "./sold-to.actions";
import { SoldToService } from "./sold-to.service";


@Injectable()
export class SoldToEffects {
    constructor(
        private actions$: Actions, private soldToService: SoldToService){
    }
    @Effect()
    addSoldTo = this.actions$.pipe(
        ofType(SoldToActionTypes.ADD_SOLD_TO),
        map((action : any) =>({
            type: SoldToActionTypes.ADD_SOLD_TO_SUCCESS,
            payload: action.payload
        }))
    )


    @Effect()
    getAllSoldTos = this.actions$.pipe(
        ofType(SoldToActionTypes.GET_SOLD_TOS),
        switchMap(() => this.soldToService.getSoldTos()),
        map((soldTo:any) => ({
            type: SoldToActionTypes.GET_SOLD_TOS_SUCCESS,
            payload: soldTo.soldTos
        })),
        catchError((error) => {
            return from ([{
                type: SoldToActionTypes.GET_SOLD_TOS_FAILURE,
                payload: error
            }])
        })
    )

}