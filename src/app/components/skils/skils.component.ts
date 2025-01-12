import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skils', // Selector to use this component in other templates
  imports: [MatProgressBarModule, CommonModule], // Importing required Angular modules
  templateUrl: './skils.component.html', // HTML template for the component
  styleUrl: './skils.component.scss' // SCSS file for styles
})
export class SkilsComponent {
  // Front-end skills with their names and progress values
  front = [
    { name: 'HTML', value: 99 },
    { name: 'CSS', value: 95 },
    { name: 'JAVASCRIPT', value: 80 },
    { name: 'TYPESCRIPT', value: 92 },
    { name: 'ANGULAR', value: 98 },
    { name: 'MATERIAL DESIGN', value: 98 },
    { name: 'BOOTSTRAP', value: 80 },
    { name: 'PHOTOSHOP', value: 50 },
  ];

  // Back-end skills with their names and progress values
  back = [
    { name: 'PHP', value: 80 },
    { name: 'SQL', value: 85 },
    { name: 'Laravel', value: 70 },
    { name: 'Node.js', value: 50 },
    { name: 'WordPress', value: 45 },
    { name: 'Kotlin', value: 40 },
    { name: 'C SHARP', value: 50 },
    { name: 'WINDOWS - MACOS - LINUX', value: 95 }
  ];
}







