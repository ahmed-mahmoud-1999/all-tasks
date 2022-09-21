import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inputVal:string = ""
  inputData:string = ""
  constructor() { }

  ngOnInit(): void {
  }

  handleInput(ev : any){
    console.log(ev.value)
    this.inputVal = ev.value
  }

}
