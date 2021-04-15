import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import {skills} from './skills';
import {ActivatedRoute} from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  isRefreshing:boolean = false;
  skillTypes:string[]=[];
  @ViewChild("skillType") skillSel: ElementRef;
  mySkills: string = "For test";
  list: skills[];
  totalList: skills[];
  searchSkill: string="";

  ngOnInit(): void {
    // this.service.getSkills().subscribe((res)=>{
    //   this.list = res;
    // })
    this.route.data.subscribe((data:{list:any})=>{
      this.list = data.list;
      this.totalList = data.list;
      let types = new Set(this.list.map((item)=>item.type));
      this.skillTypes = ['Please select', ...Array.from(types)];
      setTimeout(()=>{this.service.showLoading(false);});
    });
    this.clearAllFiltersCheck();
  }

  clearAllFiltersCheck(){
    if(this.skillSel !== undefined && this.searchSkill !==undefined){
      return !(this.skillSel.nativeElement.value !== "Please select" || this.searchSkill !== "");
    }
    return true;
  }

  skillChange=(value)=>{
    this.list = value === 'Please select' ? this.totalList : this.totalList.filter((val)=>val.type === value);
    this.clearAllFiltersCheck();
  }

  clearFilters=()=>{
    this.searchSkill = "";
    this.skillSel.nativeElement.value = "Please select";
    this.skillChange(this.skillSel.nativeElement.value);
  }

}
