import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // Correct library import
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // استخدام CommonModule هنا بدلاً من BrowserModule
import { provideAnimations } from '@angular/platform-browser/animations';



// Define a factory function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  // Configure the loader to fetch translation files from the 'i18n/' folder
  // Translation files are expected to be in JSON format with '.json' extension
  return new TranslateHttpLoader(http, 'i18n/', '.json');
}


// Application bootstrap configuration
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provide the Angular HttpClient service
    ...TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, // Define the translation loader
        useFactory: HttpLoaderFactory, // Use the factory function for translation loading
        deps: [HttpClient], // Specify dependencies for the factory function
      },
    }).providers || [], // Add translation module providers
    CommonModule,
    provideAnimations()
  ],

}).catch(err => console.error(err)); // Handle errors during application bootstrap
