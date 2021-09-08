import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from 'app/servicios/api/api.service';


@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  comment= "";
  postComment=[];
  form: FormGroup;


  postear(){
    this.postComment.push(this.comment);
    this.comment="";
  }

  constructor(private ApiService:ApiService , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      textAreaComment: ['']
    });

  }

  public cargarData(){
    this.ApiService.get('http://127.0.0.1:8000/api/foro').subscribe(respuesta =>{
      console.log(respuesta)
    })

  }

  public enviarData(){
    this.ApiService.post(`http://127.0.0.1:8000/api/foro`, {text:this.form.value.textAreaComment}).subscribe(respuesta => {
      console.log(respuesta)
    })

  }

}
