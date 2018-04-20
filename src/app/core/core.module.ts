import {NgModule, ModuleWithProviders} from '@angular/core';
import { AppComponent } from './containers/app.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { LayoutComponent } from './components/layout.component';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
