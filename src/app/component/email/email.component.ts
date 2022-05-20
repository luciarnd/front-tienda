import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/model/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
   
  email: Email;
  fileArchivo: Blob;
  selectedFiles: FileList;


  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }
  public sendEmail(email: NgForm): void {
    
    this.emailService.sendEmail(email.value, this.fileArchivo).subscribe(
      (response: Email) => {
        console.log(response);
        email.reset();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        email.reset();
      }
    );
  }

  public selectFile(event: any): void {

    this.selectedFiles = event.target.files;

    this.fileArchivo = this.selectedFiles[0];

  }

}
