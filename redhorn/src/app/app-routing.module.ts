import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages 
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';

const routes: Routes = [
  { path: '' , component: HomepageComponent },
  { path: 'capabilities' , component: CapabilitiesComponent },
  { path: 'work' , component: WorkComponent },
  { path: 'contact-us' , component: ContactUsComponent },
  { path: 'case-study/:slug' , component: CaseStudyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
