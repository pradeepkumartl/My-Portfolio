import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  Projects: Observable<Array<Projects>>

  ngOnInit(): void {
    this.Projects = this.service.getProjects();
  }

  mySkills: string = "For test";
  list: skills[]

}
