import { Component } from '@angular/core';
import { MainAnimationComponent } from '../main-animation/main-animation.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { ProjectComponent } from "../project/project.component";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'main-section',
  standalone: true,
  imports: [MainAnimationComponent, BtnPrimaryComponent, ProjectComponent, EducationComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
