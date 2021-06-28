import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { SesionService } from 'src/app/services/sesion.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  rutaResourcesImg = environment.rutaResourcesImg;
  usuarioModel = new UsuarioModel();
  private key: string = 'userSesionData';

  constructor(private sesionService: SesionService, private router: Router) { }

  ngOnInit(): void {
  }

  validarSesion(): void {
    if(this.usuarioModel.email.trim() === '') {
      return
    }

    this.sesionService.validarSesion(this.usuarioModel).subscribe(resp => {
      console.log(resp.usuario);
      
      if(resp.sesionValida && resp.usuario.length > 0) {
        this.sesionService.secureStorage.setItem(this.key, resp.usuario[0]);
        this.router.navigateByUrl('/dashboard');
      } else {
        Swal.fire(
          'Error',
          'Usuario o contraseña incorrecta, favor de revisar tus datos.',
          'error'
        )
      }
    })
  }

}
