import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AlertModule } from "./_alert";

import { NavbarComponent } from "./navbar/navbar.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseRowComponent } from "./course-row/course-row.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutComponent,
    CourseListComponent,
    CourseRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AlertModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
