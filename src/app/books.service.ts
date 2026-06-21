import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Book {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  private bookData: Book = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  };

  getBook(): Observable<Book> {
    return of(this.bookData);
  }

  constructor() { }
}