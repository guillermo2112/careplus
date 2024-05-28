import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialtyService } from '../../../services/specialty.service';
import { FormsModule } from '@angular/forms';
import { Specialty } from '../../../entities/specialty';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-specialty',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-specialty.component.html',
  styleUrl: './update-specialty.component.css'
})
export class UpdateSpecialtyComponent implements OnInit{

  //id: number;
  specialty: Specialty = new Specialty();


  constructor(
    private specialtyService: SpecialtyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.specialty.id = history.state.specialtyId;
    //this.id = this.route.snapshot.params['id'];
    this.specialtyService.getSpecialtyById(this.specialty.id).subscribe(dato => {
      this.specialty = dato;
    });
  }

  saveSpecialty() {
    this.specialtyService.updateSpecialty(this.specialty.id, this.specialty).subscribe(
      dato => {
        Swal.fire({
          title: "Success",
          text: "Especilidad actualizada con éxito",
          icon: "success"
        }).then(() => {
            this.goToListspecialty();
          
        });
        
      }
    );
  }

  goToListspecialty() {
    this.router.navigate(['/especialidades']);
  }

  onSubmit() {
    this.saveSpecialty();
  }

}
