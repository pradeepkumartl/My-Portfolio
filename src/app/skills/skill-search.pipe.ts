import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { skills} from '../skills/skills'

@Pipe({
  name: 'skillSearch'
})
export class SkillSearchPipe implements PipeTransform {

  constructor(){
    
  }
  transform(skillArray: skills[], searchSkill: string): skills[] {
    return skillArray.filter((val)=>{
      return val.name.toLowerCase().includes(searchSkill.toLowerCase());
    });
  }

}
