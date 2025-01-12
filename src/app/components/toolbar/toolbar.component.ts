import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar', // Component selector for template usage
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './toolbar.component.html', // Path to the HTML template
  styleUrl: './toolbar.component.scss', // Path to the SCSS styles
})

export class ToolbarComponent {
  // Default language settings
  selectedLanguage: string = 'ar'; // Default selected language
  currentLanguageName: string = 'English'; // Default language name
  currentLanguage: string; // Stores the current language code

  // Language name mapping
  languageNames: { [key: string]: string } = {
    en: 'English',
    fr: 'Français',
    ar: 'العربية',
  };

  constructor(private translate: TranslateService) {
    // Retrieve the saved language from localStorage or use browser language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const supportedLanguages = ['en', 'fr', 'ar'];
    const browserLang = this.translate.getBrowserLang()?.toLowerCase() || 'en';

    // Determine the language to use: localStorage > browser language > default ('en')
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      this.currentLanguage = savedLanguage;
      this.currentLanguageName = this.languageNames[savedLanguage];
    } else if (supportedLanguages.includes(browserLang)) {
      this.currentLanguage = browserLang;
      this.currentLanguageName = this.languageNames[browserLang];
    } else {
      this.currentLanguage = 'en';
      this.currentLanguageName = this.languageNames['en'];
    }

    // Apply the selected language and set text direction
    this.translate.use(this.currentLanguage);
    this.translate.setDefaultLang('en');
    const direction = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
    localStorage.setItem('textDirection', direction);
  }

  // Function to switch the current language
  switchLanguage(language: string) {
    const supportedLanguages = ['en', 'fr', 'ar'];
    this.currentLanguageName = this.languageNames[language];
    if (supportedLanguages.includes(language)) {
      this.translate.use(language); // Change the language in the translation service
      localStorage.setItem('selectedLanguage', language); // Save the selected language
      this.currentLanguage = language;

      // Update text direction based on the language
      const direction = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', direction);
      localStorage.setItem('textDirection', direction); // Save the direction in localStorage
    }
  }

  // Injecting MatSnackBar for displaying notifications
  private _snackBar = inject(MatSnackBar);

  // Snackbar position configuration
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // Lifecycle hook to initialize the snackbar
  ngOnInit() {
    this.openSnackBar();
  }

  // Function to display a snackbar message
  openSnackBar() {
    this._snackBar.open('😊 Site under maintenance', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
