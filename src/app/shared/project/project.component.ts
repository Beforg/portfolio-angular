import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import projectsData from '../../assets/projects.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'] // Corrigido de styleUrl para styleUrls
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = projectsData as Project[]; // Atribuindo os dados do JSON à variável projects
  }
}