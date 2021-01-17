import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formGroup : FormGroup;
  constructor( private formBuilder: FormBuilder, private usersService: UsersService ) { }

  users$: Observable<User[]> = this.usersService.getUsers$();

  listUsers:User[];

  ngOnInit() {

    this.buildForm();

    this.users$.pipe().subscribe((response:User[]) => {
      this.listUsers=response;
      console.log(response);
      });

  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      idCliente: new FormControl(null,[]),
      nombre: new FormControl(null,[]),
      direccion: new FormControl(null,[]),
      tlf:new FormControl(null,[]),
      email:new FormControl(null,[]),
      localidad:new FormControl(null,[]),
      provincia:new FormControl(null,[]),
      cp:new FormControl(null,[]),
    });

  }

  private guardar(){
    //obtenemos todo el cntenido del formulario
     const data = this.formGroup.getRawValue();

     //eliminamos el contenido del formulario
     this.formGroup.reset();

    //envianos los datos al servidor, y obtenemos la respuesta y la guardamos en nuestra lista
     this.usersService.saveUser$(data).subscribe((response : User)=>{
       this.listUsers.push(response)
      });
  }

}
