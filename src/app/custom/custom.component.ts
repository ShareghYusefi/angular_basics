import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'custom',
  standalone: true,
  imports: [NgIf],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  title = 'Custom Component';
  imageUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
}
