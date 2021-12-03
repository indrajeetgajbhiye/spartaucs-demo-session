import { SoldToEffects } from "./sold-to/sold-to.effects"
import { soldToReducer } from "./sold-to/sold-to.reducers"

export const Stores = {
    soldToStore: soldToReducer
}

export const Effects = [SoldToEffects]
