import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  imageSrc: string | ArrayBuffer | null = null;

  ngOnInit() {
    // Cargar la imagen guardada en localStorage al iniciar el componente
    const savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
      this.imageSrc = savedImage;
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result;
        // Guardar la imagen en localStorage
        if (this.imageSrc) {
          localStorage.setItem('savedImage', this.imageSrc.toString());
        }
      };

      reader.readAsDataURL(file);
    }
  }
}
