import { Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';


export const routes: Routes = [

  
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'become-a-pilot',
    loadComponent: () =>
      import('./pages/become-pilot/become-pilot.component').then(m => m.BecomePilotComponent)
  },

  {
    path: 'dgca',
    loadComponent: () =>
      import('./pages/dgca/dgca.component').then(m => m.DgcaComponent)
  },

  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },

 

  {
    path: '**',
    redirectTo: ''
  }
  

];

RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
})

