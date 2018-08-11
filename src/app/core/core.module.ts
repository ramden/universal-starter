import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootStoreModule} from '../root-store/root-store.module';

@NgModule({
    imports: [CommonModule, RootStoreModule],
    declarations: [],
    exports: [RootStoreModule]
})
export class CoreModule {}
