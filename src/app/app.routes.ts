import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './page/main/main.component';
import { LoginComponent } from './page/login/login.component';
import { ContactComponent } from './page/contact/contact.component';
import { DocdownloadComponent } from './page/docdownload/docdownload.component';
import { StaffComponent } from './page/staff/staff.component';
import { NewsComponent } from './page/news/news.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doc', component: DocdownloadComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'news', component: NewsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
