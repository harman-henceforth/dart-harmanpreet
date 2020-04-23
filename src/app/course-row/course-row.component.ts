import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-course-row",
  templateUrl: "./course-row.component.html",
  styleUrls: ["./course-row.component.css"],
})
export class CourseRowComponent implements OnInit {
  // @Input() type: any;
  @Input() courses = [];
  // @Input() yesterday_skills = [];
  // @Input() today_skills = [];
  // @Input() other_skills = [];
  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  editCourse(data) {
    console.log(data);
    this.editEvent.next(data);
  }
  deleteCourse(id) {
    this.deleteEvent.next(id);
  }
}
