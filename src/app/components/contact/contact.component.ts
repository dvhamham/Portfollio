import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ], // Import required Angular and Material modules
  templateUrl: './contact.component.html', // HTML file location
  styleUrls: ['./contact.component.scss'] // CSS file location
})
export class ContactComponent {
  // Signal for tracking the input text in the message field
  messageCount = signal('');
  // Variable to track the length of the entered message
  messagetLength: number = 0;
  isSubmitting = false;  // Track form submission status


  // Object to store error messages
  errorMessages: Record<string, string> = {
    required: 'This field is required',
    pattern: 'Only letters (Latin/Arabic) and spaces are allowed',
    minlengthFullName: 'Full name must be at least 3 characters',
    minlengthMessage: 'Message must be at least 10 characters',
    maxlengthFullName: 'Full name cannot exceed 35 characters',
    maxlengthMessage: 'Message cannot exceed 1000 characters',
    email: 'Invalid email address'
  };

  constructor(private http: HttpClient) { }

  // Form control for Full Name with validation
  readonly fullName = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z\s\u0600-\u06FF]*$/), // Allows Latin/Arabic letters and spaces
    Validators.minLength(3), // Minimum 3 characters
    Validators.maxLength(35) // Maximum 35 characters
  ]);

  // Form control for Email with validation
  readonly email = new FormControl('', [
    Validators.required,
    Validators.email // Validates proper email format
  ]);

  // Form control for Message with validation
  readonly message = new FormControl('', [
    Validators.required,
    Validators.minLength(10), // Minimum 10 characters
    Validators.maxLength(1000) // Maximum 1000 characters
  ]);

  // Method to generate error messages based on validation results
  updateErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return this.errorMessages['required'];  // Use ['required']
    }
    if (control.hasError('pattern')) {
      return this.errorMessages['pattern'];  // Use ['pattern']
    }
    if (control.hasError('minlength')) {
      return control === this.fullName
        ? this.errorMessages['minlengthFullName']  // Use ['minlengthFullName']
        : this.errorMessages['minlengthMessage'];  // Use ['minlengthMessage']
    }
    if (control.hasError('maxlength')) {
      return control === this.fullName
        ? this.errorMessages['maxlengthFullName']  // Use ['maxlengthFullName']
        : this.errorMessages['maxlengthMessage'];  // Use ['maxlengthMessage']
    }
    if (control.hasError('email')) {
      return this.errorMessages['email'];  // Use ['email']
    }
    return '';
  }

  // Method to check if the form is valid
  isFormValid() {
    return this.fullName.valid && this.email.valid && this.message.valid;
  }

  // Method to update the message length dynamically as the user types
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.messagetLength = inputElement.value.length;
  }

  onSubmit() {
    const apiUrl = "https://hamham.me/contact.php"; // رابط الـ PHP
    const formData = {
      fullName: this.fullName.value, // استرجاع القيمة من الحقل
      email: this.email.value, // استرجاع القيمة من الحقل
      message: this.message.value // استرجاع القيمة من الحقل
    };

    interface ServerResponse {
      status: string;
      message?: string;
      error?: string;
    }

    this.http.post<ServerResponse>(apiUrl, formData)
      .subscribe({
        next: (response) => {
          if (response.status == "success") {
            alert("Your message has been sent successfully!");
          }
        },
        error: (error) => {
          console.error('Error occurred:', error);
        },
        complete: () => {
          console.log('Request completed');
        }
      });


  }


}
