import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  id:number=0;
  name:string=''
  books:Book[]=[] ;
  


  constructor(private apiService:BookService){
    
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.apiService.getBooks('books').subscribe((data:any)=>{this.books=data;console.log(data);} );
  }  

  deleteTask(){
    this.apiService.deleteBook('books',this.id).subscribe((data:any)=>this.getBooks())
  }

  searchBooks(val:any){
    if(val.author!== ""){
      this.apiService.searchBooksByAuthor('books/searchByAuthor',val.author).subscribe((data:any)=>{this.books=data;console.log(data)});
    }
    this.apiService.searchBooksByNameOrCategory('books/search',val.name,val.categorie).subscribe((data:any)=>{this.books=data;console.log(data)});
  }
  getBooksId(id:number,name:string){
    this.id=id
    this.name=name
  }

}
