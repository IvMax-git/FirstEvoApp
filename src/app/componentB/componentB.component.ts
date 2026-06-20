import { Component } from '@angular/core';

@Component({
  selector: 'app-componentB',
  standalone: true,
  templateUrl: './componentB.component.html',
  styleUrls: ['./componentB.component.css']
})
export class ComponentBComponent {
  count: number = 0;

  increment(): void {
    this.count++;
  }
  decrement(): void {
    this.count--;
  }
  reset(): void {
    this.count = 0;
  }
}