import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  skills: string = "/skills.png";

  ngOnInit(): void {
    if (window.innerWidth > 1080) {
      this.skills = "/skills.png";
    } else if (window.innerWidth < 600) {
      this.skills = "/skills-smartphone.png";
    }
  }

}
