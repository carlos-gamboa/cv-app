export class SkillsModel {

  skillName: string;
  knowledge: number;
  skillsDisplay: string;

  constructor(skill: any) {
    this.skillName = skill.skillName;
    this.knowledge = skill.knowledge;
    this.skillsDisplay = skill.skillsDisplay;
  }

}
