import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactopaciente',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  userEmail: string = '';
  message: string = '';
  userName: string = '';

  constructor() { }

  sendEmail() {
    const templateParams = {
      toEmail: this.userEmail,
      message: this.message,
      name: this.userName
    };

    emailjs.send('service_e7aad5d', 'template_e0z73lq', templateParams, 'CnLoD7mBrVO1uaoMr')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Swal.fire({
          title: "Enviado",
          text: "El correo se ha enviado correctamente",
          icon: "success"
        });      }, (error) => {
        console.error(error.text);
        Swal.fire({
          title: "Error!",
          text: "Error al enviar el correo",
          icon: "error"
        });      });
  }
}
