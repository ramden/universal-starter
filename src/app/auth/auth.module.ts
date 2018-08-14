import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginContainerComponent} from './containers/login-container/login-container.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SharedModule} from '../shared/shared.module';
import {RegisterContainerComponent} from './containers/register-container/register-container.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterContainerComponent
    },
    {
        path: 'login',
        component: LoginContainerComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    declarations: [
        LoginComponent,
        LoginContainerComponent,
        RegisterComponent,
        RegisterContainerComponent
    ]
})
export class AuthModule {}
