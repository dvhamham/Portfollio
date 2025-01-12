import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-works', // Selector for using this component in templates
  imports: [
    TranslateModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatDividerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush, // Optimized change detection
  templateUrl: './works.component.html', // HTML file for template
  styleUrl: './works.component.scss' // SCSS file for styles
})
export class WorksComponent {

  // Array of image objects to display
  img = [
    { url: "images/img1.jpg" },
    { url: "images/img2.jpg" },
    { url: "images/img3.jpg" },
  ];

  // Tracking function for *ngFor for better performance
  trackByFn(index: number, item: any): number {
    return index; // Using index as the tracking key
  }
}
