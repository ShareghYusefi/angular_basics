import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'course',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = 'List of Courses';
  courses = ['course1', 'course2', 'course3'];
}
