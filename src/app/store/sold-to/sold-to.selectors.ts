import { createFeatureSelector, createSelector } from "@ngrx/store";

// alldata
export const selectSoldToStore = createFeatureSelector<any>('soldToStore');

// sold tos data 
export const getAllSoldTos = createSelector(
    selectSoldToStore,
    (state) => state.soldTos
)

// selected sold to
export const getCurrentSelectedSoldTo = createSelector(
    selectSoldToStore,
    (state) => state.selectedSoldTo
)