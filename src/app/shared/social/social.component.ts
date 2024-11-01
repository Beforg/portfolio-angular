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
    { src: '/github.png', link: 'https://github.com' },
    { src: '/linkedin.png', link: 'https://linkedin.com' },
    { src: '/gmail.png', link: 'https://twitter.com' }
  ];
}