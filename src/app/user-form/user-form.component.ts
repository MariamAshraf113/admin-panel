import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserFormService } from './services/user-form.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: any = {}; // Define a user object to store form data
  isFound: boolean = false
  formData: FormData = new FormData()
  selectedImageFile: File | null = null; // Initialize selectedImageFile to null
  constructor(private userService: UserFormService,  private router: Router

  ) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedImageFile = file;
  }
  submitForm(): void {
    // const formData = new FormData();
    this.formData.append('IdNumber', this.user.IdNumber);
    this.formData.append('outgoingNumber', this.user.outgoingNumber);
    this.formData.append('transactionNumber', this.user.transactionNumber);
    this.formData.append('userOccupation', this.user.userOccupation);
    this.formData.append('userSerialNumber', this.user.userSerialNumber);
    this.formData.append('name', this.user.name);
    this.formData.append('releaseDate', this.user.releaseDate);
    this.formData.append('dateBoking', this.user.dateBoking);
    this.formData.append('WifeSerialNumber', this.user.WifeSerialNumber);
    this.formData.append('wifeName', this.user.wifeName);
    this.formData.append('type', this.user.type);
    this.formData.append('condition', this.user.condition);
    this.formData.append('nationality', this.user.nationality);
    // If you have a file input for the image, append it like this:
    if (this.selectedImageFile) {
      this.formData.append('image', this.selectedImageFile);
    }
    this.userService.addUser(this.formData).pipe(
      catchError(error => {
        if (error.status === 409) {
          this.isFound = true
          console.error('Error adding/editing user:', error);
          console.log(error.status)
        }
        return throwError(error); // Rethrow the error
      })
    ).subscribe((response) => {
      console.log(response)
      if (response) {

      }
      // Handle success or navigation to user list

   
    });
  }
  


}
