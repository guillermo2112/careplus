import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  url: string = 'https://api.cloudinary.com/v1_1/dxltzkffz/image/upload';
  deleteUrl: string = 'https://api.cloudinary.com/v1_1/dxltzkffz/image/destroy'; // Define deleteUrl

  uploadImg(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  deleteImg(publicId: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        public_id: publicId,
        upload_preset: 'cloudinary-images'
      }
    };
    return this.http.delete(this.deleteUrl, options);
  }
  
}
