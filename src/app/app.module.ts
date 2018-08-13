import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RootStoreModule} from './root-store';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RootStoreModule,
        CoreModule,
        SharedModule,
        RootStoreModule,
        AuthModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
