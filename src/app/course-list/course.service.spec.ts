import { TestBed } from "@angular/core/testing";

import { CourseService } from "./course.service";
import { combineAll } from "rxjs/operators";
import { Component } from "@angular/core";

describe("CourseService", () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should call get course list function", () => {
    // dat
    service.getCourseList();
  });
  it("should call  add course function", () => {
    let data: any = {};
    service.addCourse(data);
  });
  it("should call  edit course function", () => {
    let data: any = {
      id: "123",
    };
    service.editCourse(data);
  });
  it("should call  search course function", () => {
    let keyword = "php";
    service.searchFilter(keyword);
  });
});
