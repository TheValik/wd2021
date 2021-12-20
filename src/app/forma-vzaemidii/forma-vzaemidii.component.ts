import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-forma-vzaemidii',
  templateUrl: './forma-vzaemidii.component.html',
  styleUrls: ['./forma-vzaemidii.component.sass']
})
export class FormaVzaemidiiComponent implements OnInit {

  constructor(private readonly simpleService: NewsService) { }

  ngOnInit(): void {
  }
  perem: string ="NO"
  onSubmit() {
    this.simpleService.inputName = (<HTMLInputElement>document.getElementById("NameID")).value;
    this.simpleService.inputEmail = (<HTMLInputElement>document.getElementById("EmailID")).value;
    this.simpleService.inputText = (<HTMLInputElement>document.getElementById("TextID")).value;
    console.log(this.simpleService.inputName)
    console.log(this.simpleService.inputEmail)
    console.log(this.simpleService.inputText)
    this.perem=""
  }

}

