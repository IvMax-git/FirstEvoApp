import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: false,  // Важно! Компонент в NgModule
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  itemId = '1';
  
  constructor() {
    console.log('ItemComponent загружен (lazy loading)');
  }
}