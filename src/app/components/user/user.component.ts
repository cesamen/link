import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Links } from 'src/app/models/links';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuario: Usuarios;
  resultadoUsuarios: boolean;
  links: Links[];
  link: Links =new Links();
  resultadoLinks: boolean;
  nameLink: string;
  urlLink: string;

  constructor(private serviceUsuarios: UsuariosService) { }

  ngOnInit(): void {
    this.traeLinks();
    this.traeDatos(1);
  }

  traeDatos(id: number) {
    this.serviceUsuarios.traerDatos(id).subscribe(
      usuario => {
        this.usuario = usuario;
        this.resultadoUsuarios = this.usuario !== null ? true : false;
      }, err => {
        this.resultadoUsuarios = false;
      });
  }

  traeLinks() {
    this.serviceUsuarios.traerLinks().subscribe(
      links => {
        this.links = links;
        console.log("tamaño arreglo " + links);
        this.resultadoLinks = this.links.length > 0 ? true : false;
      }, err => {
        this.resultadoLinks = false;
      });
  }

  eliminaLink(id: number) {
    this.serviceUsuarios.eliminarLink(id).subscribe();
   console.log("link eliminado");
  }

  creaLink(): void {
    this.link.name=this.nameLink;
    this.link.url=this.urlLink;
    this.serviceUsuarios.creaLink(this.link).subscribe(link =>{
      alert(`Link creado con exito`);
    }) 
  }

}
