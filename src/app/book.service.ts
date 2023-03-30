import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl='http://localhost:8082'


  constructor(private http :HttpClient) { }

  getBooks(endpoint:string){
    return this.http.get(`${this.apiUrl}/${endpoint}`)
  }
  getBook(endpoint:string,id:number){
    return this.http.get(`${this.apiUrl}/${endpoint}/${id}`)
  }
  postBook(endpoint:string,book:any){
    return this.http.post(`${this.apiUrl}/${endpoint}`,book)
  }
  putBook(endpoint:string,book:any){
    return this.http.put(`${this.apiUrl}/${endpoint}`,book)
  }
  deleteBook(endpoint:string,id:number){
    return this.http.delete(`${this.apiUrl}/${endpoint}/${id}`)
  }
  searchBooksByNameOrCategory(endpoint:string,name: string, category: string) {
    const params = {
      name: name || '',
      categories: category || ''
    };
    return this.http.get<Set<Book>>(`${this.apiUrl}/${endpoint}`, { params });
  }
  searchBooksByAuthor(endpoint:string,author: string) {
    const params = {
      author: author || ''
    };
    return this.http.get<Set<Book>>(`${this.apiUrl}/${endpoint}`, { params });
  }
}
