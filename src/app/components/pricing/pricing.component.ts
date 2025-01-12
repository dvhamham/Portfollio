import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';

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

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;  // Access the HeaderComponent

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
