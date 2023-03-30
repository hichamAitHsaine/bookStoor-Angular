import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent {
  id:number=0;
  book:any;
  response:any=new Book(0,"","","","");

  constructor(private router:Router,private apiService:BookService,private route:ActivatedRoute){
    this.route.params.subscribe((res:any)=>this.id=res['id']);
    this.getBook();
  }
  
  getBook(){
    this.apiService.getBook('books',this.id).subscribe((data:any)=>{this.book=data})
  }
  

  updateTask(val:any){
    this.apiService.putBook('books',this.book).subscribe((data:any)=>{this.book=data;this.response=data} )
    //this.router.navigateByUrl('/home');
  }

}
