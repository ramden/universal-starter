import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginContainerComponent} from './containers/login-container/login-container.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [LoginComponent, LoginContainerComponent, RegisterComponent]
})
export class AuthModule {}
