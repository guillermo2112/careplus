import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-image-upload',
  standalone:true,
  imports: [NgxDropzoneModule, CommonModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
  
})
export class ImageUploadComponent {

  constructor(private uploadService: UploadService){}

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    const validFiles = event.addedFiles.filter((file: File) => file.type === 'image/jpeg');
    if (validFiles.length !== event.addedFiles.length) {
      alert('Solo se pueden subir archivos .jpg');
    }
    this.files.push(...validFiles);
    
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadImage() {
    if (this.files.length === 0) return false;
  
    const fileData = this.files[0];
  
    let imageCounter = localStorage.getItem('imageCounter');
    let counter = imageCounter ? parseInt(imageCounter, 10) : 0;
  
    counter++;
    localStorage.setItem('imageCounter', counter.toString());
  
    const data = new FormData();
  
    data.append('file', fileData);
    data.append('upload_preset', 'cloudinary-images'); // Agrega el upload preset aquí
    data.append('cloud_name', 'dxltzkffz');
    data.append('public_id', counter.toString()); 
  
    this.uploadService.uploadImg(data).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Imagen subida exitosamente');
      },
      error: (error: any) => {
        console.log('Error status:', error.status);
        console.log('Error message:', error.message);
        console.log('Error body:', error.error);
      }
    });
    return true;
  }
}
