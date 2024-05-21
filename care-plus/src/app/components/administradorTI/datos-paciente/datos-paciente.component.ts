import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/paciente';

@Component({
  selector: 'app-datos-paciente',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './datos-paciente.component.html',
  styleUrl: './datos-paciente.component.css'
})
export class DatosPacienteComponent implements OnInit{

  constructor(private router:ActivatedRoute,private paciente_servicio:PacienteService,private route:Router){}

  id:number;
  paciente:any;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.paciente_servicio.obtener_pacientes_id(this.id).subscribe(dato =>{
      this.paciente = dato;
    })
  }

  volver_pacientes(){
    this.route.navigate(['lista_pacientes'])
  }
}
