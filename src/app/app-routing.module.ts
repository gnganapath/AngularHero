import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo: 'angular-dashboard', pathMatch: 'full'},

  {path:'angular-dashboard', loadChildren:() => import('./angular-dashboard/angular-dashboard.module').then ( m => m.AngularDashboardModule) },

  {path:'angular-intro', loadChildren: () => import ('./angular-intro/angular-intro.module').then( m=> m.AngularIntroModule) },

  {path:'modules-components', loadChildren: () => import ('./module-components/module-components.module').then( m => m.ModuleComponentsModule)},

  {path:'forms-binding', loadChildren: () => import ('./forms-binding/forms-binding.module').then( m => m.FormsBindingModule) },

  {path:'http-client-services', loadChildren: () => import ('./http-client-services/http-client-services.module').then ( m=> m.HttpClientServicesModule) },

  {path:'routing-navigation', loadChildren: () => import ('./routing-navigation/routing-navigation.module').then ( m => m.RoutingNavigationModule) },

  {path:'npm-library-update', loadChildren: () => import ('./npm-library-update/npm-library-update.module').then ( m=> m.NpmLibraryUpdateModule) },

  {path:'redux-ngrx', loadChildren: () => import('./redux-ngrx/redux-ngrx.module').then ( m => m.ReduxNgrxModule) },

  {path:'servicework-pwa-ssr', loadChildren: () => import('./servicework-pwa-ssr/servicework-pwa-ssr.module').then ( m => m.ServiceworkPwaSsrModule) },

  {path:'testing-unit-integrate-e2e', loadChildren: () => import('./testing-unit-integrate-e2e/testing-unit-integrate-e2e.module').then (m => m.TestingUnitIntegrateE2eModule) },

  {path:'security-owasp-prod', loadChildren: () => import('./security-owasp-prodbuild/security-owasp-prodbuild.module').then ( m => m.SecurityOwaspProdbuildModule) },

  {path:'devtool-i18n-cheatsheet', loadChildren: () => import('./devtools-i18n/devtools-i18n.module').then( m => m.DevtoolsI18nModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
