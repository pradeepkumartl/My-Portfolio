import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SkillEvalDirective } from '../skill-eval.directive';
import { LoadingComponent } from './loading/loading.component';
import { SkillSearchPipe } from './skill-search.pipe';
import { SearchSkillNameDirective } from './search-skill-name.directive';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillEvalDirective,
    LoadingComponent,
    SkillSearchPipe,
    SearchSkillNameDirective
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[LoadingComponent]
})
export class SkillsModule { }
