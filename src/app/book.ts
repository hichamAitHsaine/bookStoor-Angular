export class Book{
    // private Long id;
    // private String name;
    // private String ISBN;
    // private String author;
    // private String categorie;
    id:number;
    name:string;
    isbn:string;
    author:string;
    categorie:string;
    constructor(id:number,
        name:string,
        isbn:string,
        author:string,
        categorie:string,){
            this.id=id;
            this.name=name;
            this.isbn=isbn;
            this.author=author;
            this.categorie=categorie;
        }
}