import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SaveimageService } from './saveimage.service';
import { ApartmentsService } from './apartments.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:  [ SaveimageService, ApartmentsService ]
})

export class AppComponent {
  title = 'my-angular-app';
}
