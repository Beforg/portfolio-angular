import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import educationData from '../../assets/education.json';
import { Education } from '../../models/education.model';
@Component({
  selector: 'education-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];
  pathImg: string = 'education.png';
  ngOnInit(): void {
    this.educations = educationData as Education[];
  }
}
