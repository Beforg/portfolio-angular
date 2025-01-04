import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  images: string[] = [
    '/java.png',
    '/spring.png',
    '/pg.png',
    '/csharp.png',
    '/ts.png',
    '/js.png',
    '/angular.png',
  
  ]

}
