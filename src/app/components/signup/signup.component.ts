import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario: Usuarios = new Usuarios();
  constructor(private serviceUsuarios: UsuariosService) { }

  ngOnInit(): void {
  }

  crearUsuario(){
       this.serviceUsuarios.crearUsuario(this.usuario).subscribe();
       console.log(this.usuario);
       alert(`Usuario ${this.usuario.email} creado con exito`);
  }

}
