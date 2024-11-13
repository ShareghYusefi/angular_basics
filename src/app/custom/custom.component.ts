import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'custom',
  standalone: true,
  imports: [NgIf],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {}
