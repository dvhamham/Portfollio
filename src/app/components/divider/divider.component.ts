import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-divider', // Component selector for use in templates
  standalone: true, // Indicates a standalone Angular component
  imports: [MatDividerModule], // Required Angular Material modules
  templateUrl: './divider.component.html', // Path to the component's HTML template
  styleUrls: ['./divider.component.scss'], // Path to the component's SCSS stylesheet
})
export class DividerComponent {
  // Input property to receive the text to display inside the divider
  @Input() dividerText: string = ''; // Default value is an empty string
}
