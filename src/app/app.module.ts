import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FieldValidatorDirective } from './contact-me/field-validator.directive';
import { SkillsModule } from './skills/skills.module';
import { DateCheckDirective } from './projects/date-check.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    FieldValidatorDirective,
    DateCheckDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SkillsModule
  ],
  exports:[],
  providers: [],
  entryComponents: [ContactMeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
