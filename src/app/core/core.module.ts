import {NgModule, ModuleWithProviders} from '@angular/core';
import { AppComponent } from './containers/app.component';

const COMPONENTS = [
  AppComponent
];

@NgModule()
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
      declarations: [COMPONENTS],
      exports: [COMPONENTS]
    };
  }
}
