import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CertificateComponent } from './Components/certificate/certificate.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { ProtfolioComponent } from './Components/protfolio/protfolio.component';
import { MemoryComponent } from './Components/memory/memory.component';
import { ProjectComponent } from './Components/project/project.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';


const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Protfolio',
    component: ProtfolioComponent
  },
  {
    path: 'Certificate',
    component: CertificateComponent
  },
  {
    path: 'Memories',
    component: MemoryComponent
  },
  {
    path: 'Resume',
    component: ResumeComponent
  },
  {
    path: 'Project',
    component: ProjectComponent
  },
  {
    path: 'About_Me',
    component: AboutmeComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: ' ',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
