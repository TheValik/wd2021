import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-vstavka-componenta',
  templateUrl: './vstavka-componenta.component.html',
  styleUrls: ['./vstavka-componenta.component.sass']
})
export class VstavkaComponentaComponent implements OnInit {

  constructor(private readonly simpleService: NewsService) { }

  name: string = this.simpleService.inputName
  email: string = this.simpleService.inputEmail
  text: string = this.simpleService.inputText

  ngOnInit(): void {
    console.log(this.name)
    console.log(this.email)
    console.log(this.text)
  }

}
