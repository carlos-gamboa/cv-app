import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cv-edit-functional',
  templateUrl: './cv-edit-functional.component.html',
  styleUrls: ['./cv-edit-functional.component.css']
})
export class CvEditFunctionalComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      estudios: this.fb.array([]),
      habilidades: this.fb.array([]),
      experiencias: this.fb.array([])
    })
  }

  //getter habilidades
  get habilidadesForms(){
    return this.myForm.get('habilidades') as FormArray
  }

  //funcionalidad para añadir una habilidad
  addHabilidad(){
    const habilidad = this.fb.group({
      clave: [],
    })

    this.habilidadesForms.push(habilidad);
  }

  //funcionalidad para borrar una habilidad
  deleteHabilidad(i){
    this.habilidadesForms.removeAt(i);
  }

  //getter estudios
  get estudiosForms(){
    return this.myForm.get('estudios') as FormArray
  }
  
  //funcionalidad para añadir un estudio
  addEstudios(){
    const estudio = this.fb.group({
      año: [],
      titulo: [],
      institucion: [],
      ciudad: [],
    })
  
    this.estudiosForms.push(estudio);
  }
  
  //funcionalidad para borrar un estudio
  deleteEstudios(i){
    this.estudiosForms.removeAt(i);
  }

  //getter experiencias laborales<
  get experienciasForms(){
    return this.myForm.get('experiencias') as FormArray
  }

  //funcionalidad para añadir una experiencia laboral
  addExperiencia(){
    const experiencia = this.fb.group({
      fechas: [],
      empresa: [],
      cargo: [],
      ciudad: [],
    })

    this.experienciasForms.push(experiencia);
  }

  //funcionalidad para borrar una experiencia laboral
  deleteExperiencia(i){
    this.experienciasForms.removeAt(i);
  }

}
