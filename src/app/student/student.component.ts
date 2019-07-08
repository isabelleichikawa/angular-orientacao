import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

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
