import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateCheckDirective } from './date-check.directive';

@Component({
  template: '<span appDateCheck [toDate]="2020-12-12"></span>'
})
class DateCheckDirectiveComp{
}
describe('DateCheckDirective', () => {
  let component: DateCheckDirectiveComp;
  let fixture: ComponentFixture<DateCheckDirectiveComp>;
  let inputEl: DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[DateCheckDirective, DateCheckDirectiveComp]
    });

    fixture = TestBed.createComponent(DateCheckDirectiveComp);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement;
  })
  it('should create an instance', () => {
    fixture.detectChanges();
    expect(inputEl.nativeElement.innerText).toBe("");
  });
});
