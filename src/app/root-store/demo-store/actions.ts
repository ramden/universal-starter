import {Action} from '@ngrx/store';
import {Demo} from '../../shared/models';

export enum ActionTypes {
    LOAD_REQUEST = '[Demo] Load Request',
    LOAD_FAILURE = '[Demo] Load Failure',
    LOAD_SUCCESS = '[Demo] Load Success'
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(public payload: {error: string}) {}
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: {items: Demo[]}) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
