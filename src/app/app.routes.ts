import {Routes} from '@angular/router';
import {MainLayout} from '@layouts/main-layout/main-layout';
import {AddListingPage} from '@pages/add-listing-page/add-listing-page';
import {ListingsPage} from '@pages/listings-page/listings-page';
import {ListingPage} from '@pages/listing-page/listing-page';
import {NotFound} from '@components/not-found/not-found';
import {AccountSettingsPage} from '@pages/account-settings-page/account-settings-page';
import {AuthGuard} from '@guards/auth-guard';
import {LoginPage} from '@pages/login-page/login-page';
import {RegisterPage} from '@pages/register-page/register-page';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'register',
        component: RegisterPage
      }
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'listings',
        pathMatch: 'full'
      },
      {
        path: 'listings',
        component: ListingsPage
      },
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'listing',
            children: [
              {
                path: 'add',
                component: AddListingPage
              }
            ]
          },
          {
            path: 'account-settings',
            component: AccountSettingsPage
          }
        ]
      },
      {
        path: 'listing',
        children: [
          {
            path: ':id',
            component: ListingPage
          }
        ]
      },
      {
        path: '**',
        component: NotFound
      },
    ]
  },
];
