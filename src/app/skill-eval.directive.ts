import { Directive, ElementRef, HostListener, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSkillEval]'
})
export class SkillEvalDirective {

  @Input("skillLevel") skillLevel: number;
  constructor(private el: ElementRef) {
    //this.tempRef.elementRef.nativeElement.style.backgroundColor = 'yellow';
    //this.el.nativeElement.style.width= this.skillLevel*10+"%";
  }

  ngOnInit(){
    this.el.nativeElement.style.width= this.skillLevel*10+"%";
  }

  @HostListener("mouseover")
  myListener(){
    //this.el.nativeElement.style.transform = "scale(2,2)";
  }

}
