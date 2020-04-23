import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseRowComponent } from "./course-row.component";

describe("CourseRowComponent", () => {
  let component: CourseRowComponent;
  let fixture: ComponentFixture<CourseRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call edit course function", () => {
    // expect(component).toBeTruthy();
    let data: any = {};
    component.editCourse(data);
  });
  it("should call deleteCourse course function", () => {
    // expect(component).toBeTruthy();
    let id = "123";
    component.deleteCourse(id);
  });
});
