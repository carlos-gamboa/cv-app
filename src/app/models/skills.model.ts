export class SkillsModel {

  skillName: string;
  knowledge: number;

  constructor(skill: any) {
    this.skillName = skill.skillName;
    this.knowledge = skill.knowledge;
  }
}
