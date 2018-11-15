import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'array-form',
  templateUrl: './cv-edit-functional.component.html',
  styleUrls: ['./cv-edit-functional.component.css']
})
export class CvEditFunctionalComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      habilidades : this.fb.array([])
    })
  }

  //getter funcionalidades
  get habilidadesForms(){
    return this.myForm.get('habilidades') as FormArray
  }

  //funcionalidad para añadir una habilidad
  addHabilidad(){
    const habilidad = this.fb.group({
      habilidad : [],
    })

    this.habilidadesForms.push(habilidad);
  }

  //funcionalidad para borrar una habilidad
  deleteHabilidad(i){
    this.habilidadesForms.removeAt(i);
  }

}
