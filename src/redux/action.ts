import { IStore, IStoreItem } from "./store";

export const DELETE = "DELETE";
export const ADD = "ADD";
export const INIT = "INIT";

export interface IAction {
    type: string
}

export interface IDelete extends IAction {
    id: string
}

export interface IAdd extends IAction {
    data: IStoreItem
}

export interface IInit extends IAction {
    data: IStore
}

export const deleteData = (id: string):IDelete => {
    return {
        type: DELETE,
        id: id
    }
}

export const addData = (data: IStoreItem): IAdd => {
    return {
        type: ADD,
        data: data
    }
}

export const initStore = (data: IStore): IInit => {
    return {
        type: INIT,
        data: data
    }
}