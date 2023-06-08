import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-page/home-component.component';
import { AdminComponentComponent } from './pages/admin-page/admin-component.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { JobDetailsPgaeComponent } from './pages/job-details-pgae/job-details-pgae.component';

const appRountes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponentComponent},
  {path: 'admin', component: AdminComponentComponent},
  {path: 'jobs', component: JobsPageComponent},
  {path: 'jobs/:jobId', component: JobDetailsPgaeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**' , component: NotFoundPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRountes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
