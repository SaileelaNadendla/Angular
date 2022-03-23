import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path: 'student', component: StudentListComponent  },
  {path: 'course', component: CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings =[
  LoginFormComponent,
  StudentListComponent,
  CourseListComponent
];
