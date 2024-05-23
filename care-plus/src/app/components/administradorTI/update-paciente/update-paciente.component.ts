import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../entities/paciente';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-paciente',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './update-paciente.component.html',
  styleUrl: './update-paciente.component.css'
})
export class UpdatePacienteComponent implements OnInit{

  id: number;
  paciente: Paciente ;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pacienteService.obtener_pacientes_id(this.id).subscribe(dato => {
      this.paciente = dato;
    });

  }

  onSubmit(){
    this.pacienteService.actualizar_paciente(this.paciente,this.id).subscribe(dato =>{
      Swal.fire({
        title: "Success",
        text: "Paciente actualizado con éxito",
        icon: "success"
      }).then(() => {
          this.router.navigate(['/lista_pacientes']);
        
      });
    });
  }
}
