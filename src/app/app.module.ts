import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RootStoreModule} from './root-store';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RootStoreModule, CoreModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
