import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MainSectionComponent } from "../../shared/main-section/main-section.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
