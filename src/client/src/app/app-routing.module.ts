// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { IndustriaEditComponent} from './pages/industria-edit/industria-edit.component';
import { IndustriaListComponent} from './pages/industria-list/industria-list.component';
import { ProdutoEditComponent} from './pages/produto-edit/produto-edit.component';
import { ProdutoListComponent} from './pages/produto-list/produto-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'industrias/:id',  loadChildren: './pages/industria-edit/industria-edit.module#IndustriaEditModule' , canActivate: [AuthGuard] },
    { path: 'industrias',  loadChildren: './pages/industria-list/industria-list.module#IndustriaListModule' , canActivate: [AuthGuard] },
    { path: 'produtos/:id',  loadChildren: './pages/produto-edit/produto-edit.module#ProdutoEditModule' , canActivate: [AuthGuard] },
    { path: 'produtos',  loadChildren: './pages/produto-list/produto-list.module#ProdutoListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
