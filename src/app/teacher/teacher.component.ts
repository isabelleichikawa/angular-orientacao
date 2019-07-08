import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  name: string;
  ra: number;

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  save() {
    if (this.name && this.ra) {
      console.log(this.name);
      console.log(this.ra);
    } else {
      this.snackBar.open('Informe todos os campos!', null, { duration: 2000 });
    }
  }

}
