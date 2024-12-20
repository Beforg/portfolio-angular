import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnPrimaryComponent,CommonModule],
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

  scrollToTop() {
    document.body.scrollTop = 0; // para o safari
    document.documentElement.scrollTop = 0; // Para funcionar no Chrome, Firefox, e Opera
  }

}
