import { Action } from '@ngrx/store'

export enum SoldToActionTypes {
    ADD_SOLD_TO = "ADD_SOLD_TO",
    ADD_SOLD_TO_SUCCESS = 'ADD_SOLD_TO_SUCCESS',
    ADD_SOLD_TO_FAILURE = 'ADD_SOLD_TO_FAILURE',
    GET_SOLD_TOS = 'GET_SOLD_TOS',
    GET_SOLD_TOS_SUCCESS = 'GET_SOLD_TOS_SUCCESS',
    GET_SOLD_TOS_FAILURE = 'GET_SOLD_TOS_FAILURE',
}

export class AddSoldTo implements Action{
    readonly type = SoldToActionTypes.ADD_SOLD_TO;
    constructor(public payload: any){}
}

export class AddSoldToSuccess implements Action{
    readonly type = SoldToActionTypes.ADD_SOLD_TO_SUCCESS;
    constructor(public payload: any){}
}

export class AddSoldToFailure implements Action{
    readonly type = SoldToActionTypes.ADD_SOLD_TO_FAILURE;
    constructor(public payload: any){}
}
export class GetSoldTo implements Action{
    readonly type = SoldToActionTypes.GET_SOLD_TOS;
    constructor(){}
}

export class GetSoldToSuccess implements Action{
    readonly type = SoldToActionTypes.GET_SOLD_TOS_SUCCESS;
    constructor(public payload: any){}
}

export class GetSoldToFailure implements Action{
    readonly type = SoldToActionTypes.GET_SOLD_TOS_FAILURE;
    constructor(public payload: any){}
}

export type SoldToActions = 
| AddSoldTo
| AddSoldToSuccess
| AddSoldToFailure
| GetSoldTo
| GetSoldToSuccess
| GetSoldToFailure
