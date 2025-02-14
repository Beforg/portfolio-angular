import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Exp } from '../../models/exp.model';
import expData from '../../assets/exp.json';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.css'
})
export class ExpComponent implements OnInit {
  exp: Exp[] = [];

  ngOnInit(): void {
    this.exp = expData as Exp[];
  }
}
