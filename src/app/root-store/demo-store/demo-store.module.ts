import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {DemoStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('demo', featureReducer),
        EffectsModule.forFeature([DemoStoreEffects])
    ],
    providers: [DemoStoreEffects]
})
export class DemoStoreModule {}
