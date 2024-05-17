import { Component } from '@angular/core';
import { Paciente } from '../../../entities/paciente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-usuarios',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-usuarios.component.html',
  styleUrl: './add-usuarios.component.css'
})
export class AddUsuariosComponent {

  paciente : Paciente =  new Paciente();

  onSubmit(){
    console.log(this.paciente);
  }
  

}
