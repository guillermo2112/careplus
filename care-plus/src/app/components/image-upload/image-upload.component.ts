/*import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  formData = new FormData();
  uploadImage: File | null = null;

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: any) {
    this.uploadImage = event.target.files[0];
  }*/

  /*upload() {
    if (this.uploadImage) {
      this.formData.append('image', this.uploadImage, this.uploadImage.name);
      console.log(this.formData.getAll('image')); // confirms file is being uploaded properly

      this.uploadService.upload('uploadImage/', this.formData).subscribe(
        (message: any) => {
          console.log(message);
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
    } else {
      console.warn('No file selected');
    }
  }
}
*/