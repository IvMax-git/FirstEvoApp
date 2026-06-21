import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService, Book } from '../books.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  book: Book | null = null;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBook().subscribe(book => {
      this.book = book;
      console.log('Получена книга:', book);
    });
  }
}