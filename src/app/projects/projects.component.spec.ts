import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ServiceService } from '../service.service';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      providers:[
        {provide: HttpClient, useValue:{}},
        ServiceService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    let serviceSvc = TestBed.get(ServiceService);

    spyOn(serviceSvc, 'getProjects').and.returnValue(of());
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
