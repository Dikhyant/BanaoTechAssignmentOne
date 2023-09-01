import { ADD, DELETE, IAction, IAdd, IDelete, IInit, INIT } from "./action";
import { IStore, IStoreItem } from "./store";

export const reducer = (
    state: IStore = {
        storeItems: new Array<IStoreItem>()
    }, action: IAction
    ): IStore => {

    switch (action.type) {
        case ADD:
            return {
                ...state,
                storeItems: [
                    ...state.storeItems,
                    (action as IAdd).data
                ]
            }

        case DELETE:
            return {
                ...state,
                storeItems: state.storeItems.filter(item => item.id !== (action as IDelete).id)
            }

        case INIT:
            return (action as IInit).data

        default:
            return state
    }
}