import { Routes } from '@angular/router';
import {MainLayout} from '@layouts/main-layout/main-layout';
import {AddListingPage} from '@pages/add-listing-page/add-listing-page';
import {ListingsPage} from '@pages/listings-page/listings-page';
import {ListingPage} from '@pages/listing-page/listing-page';
import {NotFound} from '@components/not-found/not-found';

export const routes: Routes = [
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
        path: 'listing',
        children: [
          {
            path: 'add',
            component: AddListingPage
          },
          {
            path: ':id',
            component: ListingPage
          }
        ]
      },
      {
        path: 'listings',
        component: ListingsPage
      },
      {
        path: '**',
        component: NotFound
      }
    ]
  }
];
