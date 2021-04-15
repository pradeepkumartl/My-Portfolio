import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { skills } from './skills/skills';
import { Projects } from './projects/projects';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{

  constructor(private http: HttpClient) { }

  getSkills():Observable<skills[]>{
    return this.http.get<skills[]>('http://localhost:3000/skills').pipe(map((res)=>{
      res.map((skill)=> skill["test"] = 123);
      console.log(res);  
      return res;
    }))
  }

  getProjects():Observable<Projects[]>{
    return this.http.get<Projects[]>('http://localhost:3000/projects');
  }

  isRefreshing:boolean = false;
  showLoading(state){
    this.isRefreshing = state;
    return this.isRefreshing;
  }
}
