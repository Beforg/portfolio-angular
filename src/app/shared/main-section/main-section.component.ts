import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { ProjectComponent } from "../project/project.component";
import { EducationComponent } from "../education/education.component";
import { SocialComponent } from '../social/social.component';
import { FooterComponent } from "../footer/footer.component";
import { ExpComponent } from "../exp/exp.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'main-section',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ProjectComponent,
    EducationComponent,
    SocialComponent,
    FooterComponent,
    ExpComponent,
    SkillsComponent
],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  myImg: string = '/me.png';
  
}
