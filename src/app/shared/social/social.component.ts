import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {


  imagens = [
    { src: '/portfolio-angular/github.png', link: 'https://github.com/Beforg' },
    { src: '/portfolio-angular/linkedin.png', link: 'https://www.linkedin.com/in/beforg/' }
  ];
}