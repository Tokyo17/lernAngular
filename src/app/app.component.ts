import { HttpClient } from '@angular/common/http';
import { Component, effect, OnInit, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DataService } from './service/data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet,MatProgressBarModule,HomeComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lernAngular';

}
