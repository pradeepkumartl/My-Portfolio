import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolverService } from './resolver.service';

import { SkillsComponent } from './skills.component';

const routes: Routes = [
  { 
  path: '', 
  component: SkillsComponent ,
  resolve:{
    list: ResolverService
  },
  data:{animation:'skillsComponent'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
