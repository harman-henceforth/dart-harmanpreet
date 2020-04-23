import { Injectable } from "@angular/core";
import { COURSES } from "./mock-data";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class CourseService {
  courses: any = COURSES;
  constructor() {}
  getCourseList() {
    return this.courses;
  }
  editCourse(data) {
    for (let index = 0; index < this.courses.length; index++) {
      const element = this.courses[index];
      if (element.id === data.id) {
        console.log(element);
        this.courses[index].title = data.title;
        this.courses[index].duration = data.duration;
        this.courses[index].duration_unit = data.duration_unit;
        this.courses[index].description = data.description;
      }
    }
  }
  addCourse(data) {
    console.log(data);
    data.id = Date.now();
    this.courses.push(data);
    console.log(this.courses);
  }
  deleteCourse(id) {
    this.courses = this.courses.filter((x) => {
      return x.id != id;
    });
    console.log(this.courses);
  }
  searchFilter(keyword) {
    console.log(keyword);
    if (keyword) {
      this.courses = COURSES;
      this.courses = this.courses.filter((x) => {
        return x.title === keyword;
      });
    } else {
      this.courses = COURSES;
    }
    console.log(this.courses);

    // for (let index = 0; index < this.courses.length; index++) {
    //   const element = this.courses[index];

    // }
  }
}
