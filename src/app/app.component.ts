import { Component } from '@angular/core';
import { ComponentBComponent } from './componentB/componentB.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello';
}