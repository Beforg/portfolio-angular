import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
