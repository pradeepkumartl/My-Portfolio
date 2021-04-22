import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSearchSkillName]'
})
export class SearchSkillNameDirective {
  @Input() search:string;
  @Input() testData: string;
  constructor(private el: ElementRef) { }

  ngOnInit(){
    console.warn("Init");
  }
  ngOnChanges(changes: SimpleChanges){
    const textValue = this.el.nativeElement.innerText,
          search = changes.search.currentValue;
    console.log("on changes", changes);
    if(search !== "" && textValue !== ""){
      this.el.nativeElement.innerHTML = textValue.replace(search, `<span style='background-color:yellow'>${search}</span>`);
    } else {
      if(textValue !== ""){
        this.el.nativeElement.innerHTML = textValue;
      }
    }
  }
}
