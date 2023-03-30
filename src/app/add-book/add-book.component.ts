import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  response:any=new Book(0,"","","","");

  constructor(private router:Router,private apiService:BookService,private route:ActivatedRoute){}
  
  addBook(vl:any){
    this.apiService.postBook('books',vl).subscribe((data:any)=>{this.response=data});
    setTimeout(()=>console.log(this.response),1000)
    
  }
}
