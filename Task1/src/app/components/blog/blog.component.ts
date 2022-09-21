import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  firstName:string = "nouran"
  inputType: string = "password"
  imagePath : string = "assets/images/download.jfif"
  inputVal : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  getNumber(){
    return 200
  }

  changeName(){
    this.firstName = "marwa"
    
  }
  handleInput(eve:any){
      // console.log(eve.value)
      console.log(eve.innerText)
  }

}
