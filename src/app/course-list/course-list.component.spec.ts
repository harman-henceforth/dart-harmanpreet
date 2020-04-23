import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseListComponent } from "./course-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { observable, of } from "rxjs";
import { CourseService } from "./course.service";
import { CourseRowComponent } from "../course-row/course-row.component";
import * as $ from "jquery";
import * as bootstrap from "bootstrap";
describe("CourseListComponent", () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let service: CourseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseRowComponent],
      providers: [CourseService],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
    service = TestBed.inject(CourseService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should get all course list form service", () => {
    let list: any;
    // service = TestBed.inject(CourseService);
    // expect(service.getCourseList()).toBe(list);
    // let call = component.getCourseList();
    let call = spyOn(service, "getCourseList").and.returnValue(of(list));
    component.getCourseList();
    expect(call).toHaveBeenCalledTimes(1);
    expect(component).toBeTruthy();
  });
  it("add form should be valid", () => {
    component.addEditForm.controls.title.setValue("title");
    component.addEditForm.controls.duration.setValue("2");
    component.addEditForm.controls.duration_unit.setValue("day");
    component.addEditForm.controls.description.setValue("lorem ..");
    expect(component.addEditForm.valid).toBeTruthy();
  });
  it("should call add course", () => {
    let list: any;
    component.addEditForm.controls.title.setValue("title");
    component.addEditForm.controls.duration.setValue("2");
    component.addEditForm.controls.duration_unit.setValue("day");
    component.addEditForm.controls.description.setValue("lorem ..");
    list = component.addEditForm.value;
    let call = spyOn(service, "addCourse").and.callThrough();
    component.addCourse();
    expect(call).toHaveBeenCalledTimes(1);
    expect(component).toBeTruthy();
  });
  it("should call edit course", () => {
    let list: any;
    component.addEditForm.controls.title.setValue("title");
    component.addEditForm.controls.duration.setValue("2");
    component.addEditForm.controls.duration_unit.setValue("day");
    component.addEditForm.controls.description.setValue("lorem ..");
    list = component.addEditForm.value;
    let call = spyOn(service, "editCourse").and.callThrough();
    component.editCourse();
    expect(call).toHaveBeenCalledTimes(1);
    expect(component).toBeTruthy();
  });
  it("should call delete course", () => {
    let id = "test12";
    let call = spyOn(service, "deleteCourse").and.callThrough();
    component.deleteCourse(id);
    expect(call).toHaveBeenCalledTimes(1);
    expect(component).toBeTruthy();
  });
  it("should call search course", () => {
    let call = spyOn(service, "searchFilter").and.callThrough();
    component.search();
    expect(call).toHaveBeenCalledTimes(1);
    expect(component).toBeTruthy();
  });
  it("should call open modal", () => {
    let id = "test12";
    // let call = spyOn(component, "openModal");
    let call = component.openModal(id);
    // expect(call).toHaveBeenCalled();
    // expect(component).toBeTruthy();
  });
  it("should call edit modal", () => {
    let id = "test12";
    // let call = spyOn(component, "openModal");
    let call = component.openEditModal(id);
    // expect(call).toHaveBeenCalled();
    // expect(component).toBeTruthy();
  });
});
