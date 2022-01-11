import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  token: string;
  resultadoUsuarios : boolean;
  constructor(private serviceUsuarios: UsuariosService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logueo(): void {
    
   this.serviceUsuarios.consultarUsuario(this.email, this.password).subscribe(
      token => {
        this.token = token;
        this.resultadoUsuarios = this.token!== null ? true : false;
      }, err => {
        this.resultadoUsuarios = false;
      });
      if( this.resultadoUsuarios){
          this.router.navigate(['/user']);
      }
      else{
        alert('Usuario o password incorrectos');
      }
  }

}
