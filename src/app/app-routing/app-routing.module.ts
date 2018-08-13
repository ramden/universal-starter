import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainerComponent} from '../auth/containers/login-container/login-container.component';

const routes: Routes = [
    {path: 'login', component: LoginContainerComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
