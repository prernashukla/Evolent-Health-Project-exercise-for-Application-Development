import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'contact-management', component: HomeComponent, data: { title: 'Home' }, children: [
        { path: '', redirectTo: 'contacts', pathMatch: 'full' },
        { path: 'contacts', loadChildren: './contact/contact.module#ContactModule' }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }