import {AuthModule} from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import {AppComponent} from './core/containers/app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import {reducers, metaReducers, CustomRouterStateSerializer} from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import {AppRouterModule} from './router/router.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule.forRoot(),
    AppRouterModule,
    SharedModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
