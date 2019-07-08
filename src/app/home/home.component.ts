import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teachers: any;
  students: any;
  orientations: any;

  constructor() { }

  ngOnInit() {
    this.getTeachers();
    this.getStudents();
    this.getOrientations();
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

  getOrientations() {
    this.orientations = [
      {
        nome: 'Orientação 1',
        professor: {
          ra: 12345,
          nome: 'Prof1'
        },
        aluno: {
          ra: 36794,
          nome: 'Aluno2'
        },
      },
      {
        nome: 'Orientação 1',
        professor: {
          ra: 12345,
          nome: 'Prof1'
        },
        aluno: {
          ra: 21654,
          nome: 'Aluno1'
        },
      }
    ];
  }

  editTeacher(teacher: any) {
    console.log(teacher);
  }

  editStudent(student: any) {
    console.log(student);
  }

}
