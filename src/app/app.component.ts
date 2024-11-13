import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { NgIf } from '@angular/common';

// Component Decorator is used to define the metadata for the component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Basics';
}
