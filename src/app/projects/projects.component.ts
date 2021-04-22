import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
import { skills } from '../skills/skills';
import { Projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  Projects: Observable<Array<Projects>>;
  private roles:[]=[];
  private roleSub:Subscription;

  ngOnInit(): void {
    this.Projects = this.service.getProjects();
  }

  mySkills: string = "For test";
  list: skills[]

  openRoles(jobID){
    this.roleSub = this.service.getRoles(jobID).subscribe((result)=>{
      this.roles = result;
    });
  }

  ngOnDestroy(){
    this.roleSub.unsubscribe();
  }
}
