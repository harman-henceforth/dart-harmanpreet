import { Component, OnInit, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { CourseService } from "./course.service";
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors } from "@angular/forms";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { AlertService } from "../_alert";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
// import * as $ from "jquery";
// declare var $: any;
@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  courses: any = [];
  addEditForm: FormGroup;
  submit: boolean;
  search_keyword: any = "";
  @ViewChild("editCourseModal", { static: true }) private editCourseModal;
  constructor(
    public apiService: CourseService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCourseList();
    this.createAddEditForm();
  }
  get f() {
    // console.log(this.addEditForm.controls);
    // console.log(this.loginForm.controls)
    return this.addEditForm.controls;
  }
  createAddEditForm() {
    this.addEditForm = this.fb.group({
      id: [""],
      title: ["", Validators.required],
      duration: ["", Validators.required],
      duration_unit: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  openModal(id: any, data?) {
    this.modalService.open(id);

    this.createAddEditForm();
    // $("#" + id).modal("show");
  }
  openEditModal(data) {
    console.log(data);
    this.addEditForm.patchValue({ id: data.id });
    this.addEditForm.patchValue({ title: data.title });
    this.addEditForm.patchValue({ duration: data.duration });
    this.addEditForm.patchValue({ duration_unit: data.duration_unit });
    this.addEditForm.patchValue({ description: data.description });

    // $("#edit-course").modal("show");
    this.modalService.open(this.editCourseModal);
  }
  getCourseList() {
    this.courses = this.apiService.getCourseList();
    console.log(this.courses);
  }
  editCourse() {
    this.submit = true;
    if (this.addEditForm.valid) {
      this.submit = false;
      this.apiService.editCourse(this.addEditForm.value);
      // $("#edit-course").modal("hide");
      // $("#edit-course").modal("hide");
      this.modalService.dismissAll();
      this.alertService.success("item has been updated");
    }
    setTimeout(() => {
      this.getCourseList();
    }, 100);
    console.log(this.courses);
  }
  addCourse() {
    this.submit = true;
    console.log(this.addEditForm);

    if (this.addEditForm.valid) {
      this.submit = false;
      this.apiService.addCourse(this.addEditForm.value);
      this.modalService.dismissAll();
      this.alertService.success("item has been added");
    }
    // this.apiService.getCourseList();
    console.log(this.courses);
  }
  deleteCourse(id) {
    console.log(id);

    this.apiService.deleteCourse(id);
    this.alertService.error("item has been deleted");
    this.getCourseList();
  }
  search() {
    this.apiService.searchFilter(this.search_keyword);
    this.getCourseList();
  }
}
