import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'about',
    pathMatch: 'prefix'
  },
  {
    path:'about',
    component: AboutMeComponent,
    data:{animation:'aboutMeComponent'}
  },
  {
    path:'projects',
    component: ProjectsComponent,
    data:{animation:'projectsComponent'}
  },
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
