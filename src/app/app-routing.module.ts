import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [{path: '', loadChildren: '@app/auth/auth.module#AuthModule'}]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
