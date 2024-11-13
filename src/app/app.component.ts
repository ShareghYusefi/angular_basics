import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { NgIf } from '@angular/common';
import { CourseComponent } from './course/course.component';

// Component Decorator is used to define the metadata for the component
@Component({
  selector: 'app-root',
  standalone: true,
  // standalone: true is used to indicate that this component is not part of any module
  // imports is used to import the dependencies required for the component
  imports: [RouterOutlet, CustomComponent, NgIf, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Basics';
}
