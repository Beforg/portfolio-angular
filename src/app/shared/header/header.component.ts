import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  images: string[] = [
    '/java.png',
    '/spring.png',
    '/pg.png',
    '/csharp.png',
    '/ts.png',
    '/js.png',
    '/angular.png',
  
  ]

  constructor() {
    window.onscroll = () => this.scrollFunction();
  }

  scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const header = document.querySelector("header");

    if (header && (document.body.scrollTop > header.offsetHeight || document.documentElement.scrollTop > header.offsetHeight)) {
      if (backToTopBtn) {
        backToTopBtn.style.display = "block";
      }
    } else {
      if (backToTopBtn) {
        backToTopBtn.style.display = "none";
      }
    }
  }

  scrollToProjects(): void {
    const width = window.innerWidth;
    if (width > 1080) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top:1800,
        behavior: 'smooth'
      });
    }

  }

  scrollToContact(): void {
    const width = window.innerWidth;
    if (width > 1080) {
      window.scrollTo({
        top: 3000,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 6000,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(): void {
    // document.body.scrollTop = 0; // para o safari
    // document.documentElement.scrollTop = 0; // Para funcionar no Chrome, Firefox, e Opera
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
