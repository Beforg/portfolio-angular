import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MainSectionComponent } from "../../shared/main-section/main-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
