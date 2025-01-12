import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-platforms',
  imports: [TranslateModule, MatButtonModule, MatCardModule, MatIconModule, CommonModule, MatDividerModule],
  templateUrl: './platforms.component.html',  // Path to the HTML template
  styleUrl: './platforms.component.scss'    // Path to the SCSS file
})
export class PlatformsComponent {
  // Array of platforms with name, title, and icon color
  platforms = [
    {
      name: 'theme_forest',   // Platform name
      title: 'template_store',  // Platform title
      iconColor: '#636363'     // Color for the icon
    },
    {
      name: 'khamasat',
      title: 'small_service',
      iconColor: '#f44336'
    },
    {
      name: 'picalica',
      title: 'template_store',
      iconColor: '#636363'
    }
  ];
}
