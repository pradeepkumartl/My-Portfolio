import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSearchSkillName]'
})
export class SearchSkillNameDirective {
  @Input() search:string;
  constructor(private el: ElementRef) { }

  ngOnInit(){
    console.warn("Init");
  }
  ngOnChanges(){
    const textValue = this.el.nativeElement.innerText,
          search = this.search;
    console.log("on changes");
    if(this.search !== "" && textValue !== ""){
      this.el.nativeElement.innerHTML = textValue.replace(search, `<span style='background-color:yellow'>${search}</span>`);
    } else {
      if(textValue !== ""){
        this.el.nativeElement.innerHTML = textValue;
      }
    }
  }
}
