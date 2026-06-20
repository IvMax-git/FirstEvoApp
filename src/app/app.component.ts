import { Component } from '@angular/core';
import { ComponentBComponent } from './componentB/componentB.component';
import { DatePipe, NgFor } from '@angular/common';
import { StringPipePipe } from './string_pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentBComponent, DatePipe, NgFor, StringPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello';
  
  items = [
    { id: 1, name: 'Яблоко', price: 100 },
    { id: 2, name: 'Банан', price: 50 },
    { id: 3, name: 'Апельсин', price: 75 },
    { id: 4, name: 'Киви', price: 120 }
  ];
  
  currentDate: Date = new Date();
  
  myNumber: number = 10;
}