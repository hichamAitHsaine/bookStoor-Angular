import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent {
  id:number=0;
  book:any;

  constructor(private router:Router,private apiService:BookService,private route:ActivatedRoute){
    this.route.params.subscribe((res:any)=>this.id=res['id']);
    this.getBook();
  }
  
  getBook(){
    this.apiService.getBook('books',this.id).subscribe((data:any)=>{this.book=data})
  }

}
