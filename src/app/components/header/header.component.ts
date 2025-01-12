import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Angular Material button module
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // For internationalization
import { ContactComponent } from '../contact/contact.component'; // Bottom sheet contact component
import { MatBottomSheet } from '@angular/material/bottom-sheet'; // Angular Material bottom sheet service

@Component({
  selector: 'app-header', // Component selector for use in templates
  imports: [ContactComponent, TranslateModule, MatButtonModule], // Required modules and components
  templateUrl: './header.component.html', // Path to HTML template
  styleUrls: ['./header.component.scss'], // Path to SCSS stylesheet
})
export class HeaderComponent {
  constructor(private _bottomSheet: MatBottomSheet, private translate: TranslateService) { }


  /**
   * Opens the ContactComponent in a bottom sheet.
   * Configuration includes custom CSS class, backdrop settings, and data passing.
   */
  openContact(): void {
    this._bottomSheet.open(ContactComponent, {
      panelClass: 'custom-bottom-sheet', // Apply custom CSS class to the panel
      hasBackdrop: true, // Enable a backdrop behind the bottom sheet
      direction: (localStorage.getItem('selectedLanguage') || this.translate.getBrowserLang()) === 'ar' ? 'rtl' : 'ltr',
      disableClose: false, // Allow closing by clicking outside the sheet
      data: { message: 'Hello from Bottom Sheet' }, // Data to pass to the ContactComponent
    });
  }
}
