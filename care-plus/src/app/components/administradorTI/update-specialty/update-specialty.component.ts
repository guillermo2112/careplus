import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialtyService } from '../../../services/specialty.service';
import { FormsModule } from '@angular/forms';
import { Specialty } from '../../../specialty';

@Component({
  selector: 'app-update-specialty',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-specialty.component.html',
  styleUrl: './update-specialty.component.css'
})
export class UpdateSpecialtyComponent implements OnInit{

  id: number;
  specialty: Specialty;


  constructor(
    private specialtyService: SpecialtyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.specialtyService.getSpecialtyById(this.id).subscribe(dato => {
      this.specialty = dato;
    });
  }

  saveSpecialty() {
    this.specialtyService.updateSpecialty(this.id, this.specialty).subscribe(
      dato => {
        console.log(dato);
        this.goToListspecialty();
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
