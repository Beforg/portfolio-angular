import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css'
})
export class BtnPrimaryComponent {
  @Input() text : string = "";
}
