import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import projectsData from '../../assets/projects.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'] 
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = projectsData as Project[]; 
  }

  goToRepository(url: string) {
    window.open(url, '_blank'); 
  }
}