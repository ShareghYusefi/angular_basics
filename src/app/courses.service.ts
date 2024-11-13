import { Injectable } from '@angular/core';

// Decorator is used to define the metadata for our class definition
// Injectable decorator lets angular know that this class can be injected into other classes
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = ['course1', 'course2', 'course3'];

  constructor() {}

  getCourses() {
    return this.courses;
  }
}
