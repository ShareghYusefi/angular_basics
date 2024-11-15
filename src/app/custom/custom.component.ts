import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorfulBGDirective } from '../colorful-bg.directive';

@Component({
  selector: 'custom',
  standalone: true,
  imports: [NgIf, FormsModule, ColorfulBGDirective],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  title = 'Custom Component';
  imageUrl =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  colSpan = 2;

  isActive = true;
  email = '';

  onSave($event: Event) {
    console.log('Button was clicked', $event);
  }

  onKeyDown(emailArg: string) {
    console.log('Enter was pressed', emailArg);
  }
}
