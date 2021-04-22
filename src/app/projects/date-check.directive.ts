import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateCheck]'
})
export class DateCheckDirective {

  constructor(private el:ElementRef) { }

  @Input("toDate") toDate:any;
  ngOnInit(){
    if(this.toDate===null || this.toDate === ""){
      this.el.nativeElement.innerText = "Present";
    }
  }
}
