import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // For internationalization
import { ContactComponent } from '../contact/contact.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet'; // Angular Material bottom sheet service

// Define interface for pricing items
interface PricingItem {
  iconName: string;
  iconColor: string;
  title: string;
  items: string[];
}

@Component({
  selector: 'app-pricing',
  imports: [
    TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './pricing.component.html', // Reference to the HTML template
  styleUrl: './pricing.component.scss'    // Reference to the SCSS styling file
})
export class PricingComponent {

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


  // Pricing plans data
  pricing = [
    {
      color: '#1e88e5',  // Color for the static web application plan
      icon: 'code',      // Icon to represent the static web plan
      title: 'static_web_application',  // Title of the plan
      features: [       // List of features available in the static web plan
        'code_clean',
        'flat_design',
        'responsive_design',
        'easy_to_update'
      ]
    },
    {
      color: '#f44336',  // Color for the dynamic web application plan
      icon: 'settings_ethernet',
      title: 'dynamic_web_application',
      features: [
        'code_clean',
        'flat_design',
        'responsive_design',
        'easy_to_update',
        'database_integration'
      ]
    },
    {
      color: '#636363',  // Color for the commercial web application plan
      icon: 'shopping_cart',
      title: 'commercial_web_application',
      features: [
        'code_clean',
        'flat_design',
        'responsive_design',
        'easy_to_update',
        'database_integration',
        'payment_integration'
      ]
    }
  ];


}
