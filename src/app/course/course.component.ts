import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = 'List of Courses';
  // initialize the courses property with an empty array
  courses: string[];

  // when this component is created, angular injects the CoursesService into the constructor
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
