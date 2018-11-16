import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cv-edit-chronologic',
  templateUrl: './cv-edit-chronologic.component.html',
  styleUrls: ['./cv-edit-chronologic.component.css']
})
export class CvEditChronologicComponent implements OnInit {
  myForm: FormGroup;
  maxForms = 5;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      functions: this.fb.array([])
    });
  }

// getter funcionalidades
  get functionsForms() {
    return this.myForm.get('functions') as FormArray;
  }
  // funcionalidad para añadir una habilidad
  addFunction(inner_index: number) {
    if (inner_index < this.maxForms) {
      const a_function = this.fb.group({
        a_function: [],
      });

      this.functionsForms.push(a_function);
    }
  }

  // funcionalidad para borrar una habilidad
  deleteFunction(i: number) {
    this.functionsForms.removeAt(i);
  }

}
