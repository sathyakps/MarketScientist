import { Component, OnInit } from '@angular/core';
import { courses } from '../../data/courses';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // storing tall the courses which is imported from data folder
  public allCourses= courses;
  constructor() { }

  ngOnInit() {
  }

}
