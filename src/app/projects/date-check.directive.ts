import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateCheck]'
})
export class DateCheckDirective {

  constructor(private el:ElementRef) { }

  @Input("toDate") toDate:Date;
  ngOnInit(){
    if(this.toDate===null){
      this.el.nativeElement.innerText = "Present";
    }
  }
}
