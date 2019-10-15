import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service'
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';

declare var M: any;

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss'],
  providers: [ProyectoService]
})
export class ProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
    this.getProyecto();
  }

  // Agrega los datos en base de datos
  addProyecto(form: NgForm){
    if(form.value._id){
      this.proyectoService.putProyecto(form.value).subscribe(res => { this.resetForm(form);
        M.toast({html: 'Se ha actualizado satisfactoriamente'});
        this.getProyecto();
      });
    }
      else{
        this.proyectoService.postProyecto(form.value).subscribe(res => {this.resetForm(form);
          M.toast({html: 'Se ha guardado satisfactoriamente'});
          this.getProyecto();
        });
      }
    }

  // Listar proyecto
  getProyecto(){
    this.proyectoService.getProyecto().subscribe(res => {
      this.proyectoService.darinformacion = res as Proyecto[];
      console.log(res);
    });
  }

  deleteProyecto(_id: string){
    this.proyectoService.deleteProyecto(_id).subscribe(res => {
      this.getProyecto();
    })

  }

  editProyecto(proyecto: Proyecto){
    this.proyectoService.selectedProyecto = proyecto;

  }

  //Limpia el formulario
  resetForm(form?: NgForm) {
    // Si el formulario existe
    if(form){
      form.reset;
      this.proyectoService.selectedProyecto = new Proyecto();
    }
  }

}
