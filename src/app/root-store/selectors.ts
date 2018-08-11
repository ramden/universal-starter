import {createSelector, MemoizedSelector} from '@ngrx/store';
import {DemoStoreSelectors} from './demo-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    DemoStoreSelectors.selectJokeError,
    (jokeError: string) => {
        return jokeError;
    }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
    DemoStoreSelectors.selectJokeIsLoading,
    (joke: boolean) => {
        return joke;
    }
);
