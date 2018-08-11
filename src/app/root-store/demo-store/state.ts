import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Demo} from '../../shared/models';

export const featureAdapter: EntityAdapter<Demo> = createEntityAdapter<Demo>({
    selectId: (model) => model.id,
    sortComparer: (a: Demo, b: Demo): number => b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Demo> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
    isLoading: false,
    error: null
});
