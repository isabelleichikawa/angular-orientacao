import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent implements OnInit {

  orientationName: string;
  selectedTeacher: any;
  selectedStudent: any;

  students = [];
  teachers = [];

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getTeachers();
    this.getStudents();
  }

  save() {
    if (this.orientationName && this.selectedTeacher && this.selectedStudent) {
      console.log(this.orientationName);
      console.log(this.selectedTeacher);
      console.log(this.selectedStudent);
    } else {
      this.snackBar.open('Informe todos os campos!', null, { duration: 2000 });
    }
  }

  getTeachers() {
    this.teachers = [
      {
        ra: 12345,
        nome: 'Prof1'
      },
      {
        ra: 87459,
        nome: 'Prof2'
      },
    ];
  }

  getStudents() {
    this.students = [
      {
        ra: 21654,
        nome: 'Aluno1'
      },
      {
        ra: 36794,
        nome: 'Aluno2'
      },
    ];
  }

  selectTeacher(teacher: any) {
    this.selectedTeacher = teacher;
  }

  selectStudent(student: any) {
    this.selectedStudent = student;
  }

}
