import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,Route } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected:any = null;
  backendLink: any;
  backendLink1: any="please wait for a moment...";

 
  isActive = false;


  constructor(private http: HttpClient, private router: Router) { 
    
  }

  onfileselected(event:any){
    this.selected=<File>event.target.files[0]
    console.log(event);

  }
  onfind(){
    this.isActive = !this.isActive;
    this.http.get('http://localhost:3000/algo').subscribe((response: any) => {
      this.backendLink1= response.Model;
    });
  }
  onupload() {
    
    const fd = new FormData()
    fd.append('files',this.selected,this.selected.name);
    this.http.post("http://localhost:3000/mongodb2",fd).subscribe((event)=>{
      console.log("file uploaded success");
    });



  }
  

  ngOnInit(): void {
  }
  

}
