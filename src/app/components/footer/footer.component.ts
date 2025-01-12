import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',  // Path to the HTML template
  styleUrls: ['./footer.component.scss']  // Path to the SCSS file
})
export class FooterComponent {
  // Store the current year dynamically
  currentYear: number = new Date().getFullYear();
}
