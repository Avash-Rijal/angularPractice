import { Component } from '@angular/core';
import { EmaillistService } from './emaillist.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = 'Courses:';
  listOfCourses;
  constructor(service: EmaillistService) {
    this.listOfCourses = service.getEmailList;
  }
}
