import {Component, Input, OnInit} from '@angular/core';
import {ISkill} from "../../../../../interfaces/ISkill";
import {FakeArray} from "../../../../../../utils/fakeArray";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: ISkill = {
    title: ''
  };

  getFakeLevelArray() {
    let level = this.skill.level;
    if(!level || level < 0 || level > 6)
      return [];
    return FakeArray.ofNumber(this.skill.level!);
  }
  getFakeEmptyLevelArray() {
    let amount = 6 - this.skill.level!;
    if(amount < 0 && amount > 6)
      return [];
    return FakeArray.ofNumber(amount);
  }

  ngOnInit(): void {
  }

}
