import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructSkills]'
})
export class StructSkillsDirective {
   
  constructor(private templateRef:TemplateRef<any>, private viewContainerRef: ViewContainerRef, private el: ElementRef) { }

  ngOnInit(){
    
  }

  skillName: string="";
  @Input ()
  set appStructSkillsSkillName(val: string){
    this.skillName = val;
  }

  @Input() set appStructSkills(list: []){
    //this.viewContainerRef.clear();
    console.log(list, this.skillName);
    list.forEach(element => {
      
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    });
  }
  
  // @Input() set appStructSkills(search: string){
  //   console.log(search, this.templateRef, this.viewContainerRef);
  //   this.viewContainerRef.clear();
  //   if(this.skillName.toLowerCase().includes(search.toLowerCase())){
  //     this.viewContainerRef.createEmbeddedView(this.templateRef);
  //   }
  // }
}
