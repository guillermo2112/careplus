import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


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

  constructor() { }

  sendEmail() {
    const templateParams = {
      toEmail: this.userEmail,
      message: this.message,
    };

    emailjs.send('service_e7aad5d', 'template_e0z73lq', templateParams, 'CnLoD7mBrVO1uaoMr')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error(error.text);
        alert('Failed to send email.');
      });
  }
}
