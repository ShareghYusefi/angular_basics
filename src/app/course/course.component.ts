import {
  DatePipe,
  NgClass,
  NgForOf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'course',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    CapitalizePipe
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = 'List of Courses';
  date = new Date();
  // initialize the courses property with an empty array
  courses: string[];

  // when this component is created, angular injects the CoursesService into the constructor
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
