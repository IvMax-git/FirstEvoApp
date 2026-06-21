import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Выводим query параметры
    this.route.queryParams.subscribe(params => {
      console.log('Query parameters:', params);
      console.log('list:', params['list']);
      console.log('enable:', params['enable']);
    });
  }
}